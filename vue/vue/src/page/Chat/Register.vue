<template>
    <div style="flex: 1;margin-bottom: 58px;overflow-y: scroll" class="scroll">
        <div class="msg" v-for='(item, index) in chatList'>
            <Zujian :propsData='item'></Zujian>
        </div>
        <div class="form-group">
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="content" placeholder="请输入内容">
            </div>
            <button class="btn btn-primary col-sm-1" @click='fasong'>发送</button>
        </div>
    </div>
</template>
<script>
    import config from '@/configs'
    let NIM = require('../../sdk/NIM_Web_SDK_v6.8.0')
    require('../../sdk/NIM_Web_Chatroom_v6.8.0.js')
    import md5 from '../../utils/md5'
    import cookie from '../../utils/cookie.js'
    import axios from 'axios'
    import Zujian from './zujian'
    export default {
        name: 'register',
        props: {
            roomid: {
                type: Number
            }
        },
        components: {
            Zujian
        },
        data () {
            return {
                chatList: [],
                num: 0,
                content: ''
                // roomid: this.$route.query.roomid,
                // obj: {}
            }
        },
        mounted() {
            // console.log(this.roomid)
            // this.roomid = this.$route.query.roomid;
            // debugger
        },
        watch: {
            roomid(nval, oval) {
                this.roomid = nval;
                this.chatList = []
                if (this.num) {
                    this.connectNim();
                    this.chatroomInit();
                } else {
                    this.connectNim()
                }
                this.num ++
            }
        },
        methods: {
            // 初始化聊天室
            chatroomInit() {
                let _this = this;
                // console.log(Chatroom)
                this.chatroomN = Chatroom.getInstance({
                    appKey: config.appkey,
                    account: cookie.readCookie('uid'), // aiyaya
                    token: cookie.readCookie('sdktoken'), // ef4c06497767aaacebd1d71d7d86b6db
                    chatroomId: _this.roomid,
                    chatroomAddresses: _this.chatroomAddresses,
                    onconnect: onChatroomConnect,
                    onerror: onChatroomError,
                    onwillreconnect: onChatroomWillReconnect,
                    ondisconnect: onChatroomDisconnect,
                    // 消息
                    onmsgs: onChatroomMsgs
                });
                function onChatroomConnect(obj) {
                    console.log('进入聊天室', obj);
                    // 连接成功后才可以发消息
                    // var msg = chatroom.sendText({
                    //     text: 'hello',
                    //     done: function sendChatroomMsgDone(msgObj) {
                    //     }
                    // })
                }
                function onChatroomWillReconnect(obj) {
                    // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
                    console.log('即将重连', obj);
                }
                function onChatroomDisconnect(error) {
                    // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
                    console.log('连接断开', error);
                    if (error) {
                        switch (error.code) {
                            // 账号或者密码错误, 请跳转到登录页面并提示错误
                            case 302:
                                break;
                            // 被踢, 请提示错误后跳转到登录页面
                            case 'kicked':
                                break;
                            default:
                                break;
                        }
                    }
                }
                function onChatroomError(error, obj) {
                    console.log('发生错误', error, obj);
                }
                function onChatroomMsgs(msgs) {
                    _this.chatList = _this.chatList.concat(msgs)
                    console.log('收到聊天室消息', msgs);
                    console.log(_this.chatList)
                }
            },
            connectNim() {
                let _this = this;
                this.chatroom = SDK.NIM.getInstance({
                    // debug: true,
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
                        // _this.chatList.push(obj)
                        console.log(obj)
                    },
                    onconnect: function onConnect(event) {
                        console.error('this', this)
                        _this.chatroom.getChatroomAddress({
                            chatroomId: _this.roomid,
                            done: getChatroomAddressDone
                        });
                        function getChatroomAddressDone(error, obj) {
                            _this.chatroomAddresses = obj.address;
                            _this.chatroomId = obj.chatroomId;
                            // if (!_this.num) {
                                _this.chatroomInit()
                            // }
                            console.log('获取聊天室地址' + (!error?'成功':'失败'), error, obj);
                        }
                        // _this.nickName = this.account;
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
            },
            fasong() {
                let _this = this
                var msg = this.chatroomN.sendText({
                        text: _this.content,
                        done: sendChatroomMsgDone
                })
                function sendChatroomMsgDone(error, msg) {
                    _this.chatList.push(msg)
                    // console.log('发送聊天室' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient, error, msg);
                }
            }
        }
    }
</script>
<style>
    .form-group {
        position: absolute;
        bottom: 10px;
        left: 10px;
        /* height: 30px; */
        display: flex;
    }
    .col-sm-11 {
        width: 376px;
        height: 41px;
        border-radius: 5px;
        overflow: hidden;
    }
    .form-control {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
    }
    .btn-primary {
        width: 60px;
        border: none;
        border-radius: 5px;
        margin-left: 10px;
    }
    .scroll::-webkit-scrollbar {
        display: none;
    }
</style>