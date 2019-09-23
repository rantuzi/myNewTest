<template>
    <div>
        <div class="container">
            <h2 class="text-center">在线聊天室</h2>
            <div class="denglu">
                账号：
                <input type="text" name="" id="" v-model='account' /> 密码：
                <input type="text" name="" id="" v-model='password' /> 用户名:
                <input type="text" name="" id="" v-model='nickName' />
                <button @click='zhuce'>注册</button>
                <button @click='denglu'>登录</button>
            </div>
            <p style="width: 100%;height: 40px;background: pink">昵称:{{nickName}}</p>
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <div class="chat-list form-control">
                        <p v-for="item in chatList">{{item.nickName}} : {{item.content}}</p>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-11">
                        <input type="text" class="form-control" v-model="content" placeholder="请输入内容">
                    </div>
                    <button class="btn btn-primary col-sm-1" @click.prevent="send">发送</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    // import SDK from '@/sdk/NIM_Web_SDK_v6.8.0'
    // let NIM = require('../sdk/NIM_Web_SDK_v6.8.0')
    let Chatroom = require('../sdk/NIM_Web_Chatroom_v6.8.0.js')
    import cookie from '../utils/cookie.js'
    import axios from 'axios'
    import config from '@/configs'
    import md5 from '../utils/md5'
    export default {
        data() {
            return {
                // SDK: SDK
                password: '',
                nickName: '',
                chatList: [],
                content: '',
                account: '',
                errorMsg: '',
                chatroom: {},
                chatroomInfo: {}
            }
        },
        methods: {
            // 注册
            zhuce() {
                this.password = md5(this.password)
                let xhr = new XMLHttpRequest()
                console.log('99999999', config)
                xhr.open('POST', `${config.postUrl}/api/createDemoUser`, true)
                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                xhr.setRequestHeader('appkey', config.appkey)
                xhr.send(this.object2query({
                    username: this.account,
                    password: this.password,
                    nickname: this.nickName
                }))
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            let data = JSON.parse(xhr.responseText)
                            if (data.res === 200) {
                                let sdktoken = md5(this.password)
                                cookie.setCookie('uid', this.account)
                                cookie.setCookie('sdktoken', this.password)
                            } else if (data.res === 414) {
                                this.errorMsg = data.errmsg
                            } else {
                                this.errorMsg = data.errmsg
                            }
                        } else {
                            this.errorMsg = '网络断开或其他未知错误'
                        }
                    }
                }
                cookie.setCookie('uid', this.account)
                cookie.setCookie('sdktoken', this.password)
            },
            denglu() {
                
                this.connectNim();
            },
            object2query(obj) {
                let keys = Object.keys(obj)
                let queryArray = keys.map(item => {
                    return `${item}=${encodeURIComponent(obj[item])}`
                })
                return queryArray.join('&')
            },
            connectNim() {
                let _this = this;
                this.chatroom = SDK.NIM.getInstance({
                    debug: true,
                    appKey: config.appkey,
                    account: cookie.readCookie('uid'), // aiyaya
                    token: cookie.readCookie('sdktoken'), // ef4c06497767aaacebd1d71d7d86b6db
                    db: config.useDb,
                    syncSessionUnread: true,
                    syncRobots: true,
                    autoMarkRead: true, // 默认为true
                    // // 消息
                    onroamingmsgs: function (obj) {
                        console.log(obj)
                    },
                    onofflinemsgs: function (obj) {
                        console.log(obj)
                    },
                    onmsg: function (obj) {
                        _this.chatList.push(obj)
                        console.log(obj)
                    },
                    onconnect: function onConnect(event) {
                        console.error('this', this)
                        _this.nickName = this.account;
                    },
                    onfriends: function onFriends(obj) {
                        console.log('onfriends', obj)
                    },
                    onerror: function onError(event) {
                        alert('网络连接状态异常')
                    },
                    onwillreconnect: function onWillReconnect() {
                        console.log(event)
                    },
                    ondisconnect: function onDisconnect(error) {
                        switch (error.code) {
                            // 账号或者密码错误, 请跳转到登录页面并提示错误
                            case 302:
                                pageUtil.turnPage('帐号或密码错误', 'login')
                                break
                            // 被踢, 请提示错误后跳转到登录页面
                            case 'kicked':
                                let map = {
                                    PC: '电脑版',
                                    Web: '网页版',
                                    Android: '手机版',
                                    iOS: '手机版',
                                    WindowsPhone: '手机版'
                                }
                                let str = error.from
                                let errorMsg = `你的帐号于${util.formatDate(new Date())}被${(map[str] || '其他端')}踢出下线，请确定帐号信息安全!`
                                pageUtil.turnPage(errorMsg, 'login')
                                break
                            default:
                                break
                        }
                    },

                })
                console.log(this.chatroom)
            },
            liaotianshi() {
                this.chatroomInfo = SDK.ChatroomInfo()
                console.log(this.chatroomInfo)
                
            },
            send() {
                let _this = this;
                this.chatroom.options.onmsg({content: _this.content,nickName: _this.nickName})
                console.log(this.chatroom.options.onUpdateTeamManagers)
                // axios.get(
                //     `${config.postUrl}/api/chatroom/homeList`,
                //     {
                //         headers: {
                //             'appkey': config.appkey,
                //             'content-type': 'application/json',
                //         }
                //     }
                // ).then(res => {
                //     let data = res.data
                // })
            }
        },
        mounted() {
            // console.log(SDK.NIM.getChatroomAddress)
            // SDK.Chatroom.getInstance({
            //     debug: true,
            //     appKey: config.appkey,
            //     account: cookie.readCookie('uid'),
            //     token: cookie.readCookie('sdktoken'),
            //     chatroomNick: '10086',
            //     chatroomId: 3001,
            //     chatroomAddresses: ['http://localhost:8080/#/nimChat'],
            //     isAnonymous: 1,
            //     onconnect: onChatroomConnect,
            //     onerror: onChatroomError,
            //     onwillreconnect: onChatroomWillReconnect,
            //     ondisconnect: onChatroomDisconnect,
            //     // 消息
            //     onmsgs: onChatroomMsgs
            // })
            // function onChatroomConnect(chatroomInfo) {
            //     console.log('进入聊天室', chatroomInfo);
            // }
            // function onChatroomWillReconnect(obj) {
            //     // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
            //     console.log('即将重连', obj);
            // }
            // function onChatroomDisconnect(error) {
            //     // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
            //     console.log('连接断开', error);
            //     if (error) {
            //         switch (error.code) {
            //             // 账号或者密码错误, 请跳转到登录页面并提示错误
            //             case 302:
            //                 break;
            //             // 被踢, 请提示错误后跳转到登录页面
            //             case 'kicked':
            //                 break;
            //             default:
            //                 break;
            //         }
            //     }
            // }
            // function onChatroomError(error, obj) {
            //     console.log('发生错误', error, obj);
            // }
            // function onChatroomMsgs(msgs) {
            //     console.log('收到聊天室消息', msgs);
            // }
        }
    }
</script>