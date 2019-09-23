<template>
    <div class="chat-init">
        <div class="dialog">
            <div class="left-list">
                <div class="list">
                    <span>直播</span>
                    <div v-for='(item, index) in playData' @click='toThisRoom(index)'>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <span class="name">{{chatroomName}}的直播间</span>
                <Register :roomid='roomid'></Register>
                <!-- <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>
<script>
    import config from '@/configs'
    let NIM = require('../../sdk/NIM_Web_SDK_v6.8.0')
    require('../../sdk/NIM_Web_Chatroom_v6.8.0.js')
    import md5 from '../../utils/md5'
    import cookie from '../../utils/cookie.js'
    import Register from './Register'
    import axios from 'axios'
    export default {
        name: 'msg',
        data() {
            return {
                playData: [],
                index: 0,
                chatList: [],
                roomid: 0,
                chatroomName: ''
            }
        },
        components: {
            Register
        },
        mounted() {
            this.playList()
            // this.connectNim();
        },
        methods: {
            playList() {
                axios.get('https://app.netease.im/api/chatroom/homeList',{
                    headers: {
                    'appkey': config.appkey,
                    'content-type': 'application/json',
                    }
                }).then(res => {
                    if (res.status == 200) {
                        this.playData = res.data.msg.list;
                        this.roomid = this.playData[this.index].roomid;
                        this.chatroomName = this.playData[this.index].name;
                    }
                    console.log('111',this.roomid);
                })
            },
            toThisRoom(index) {
                this.index = index;
                this.roomid = this.playData[index].roomid;
                this.chatroomName = this.playData[index].name
                console.log('111',this.roomid);
                this.$router.push({path: '/msg/register'})
                // this.$nextTick(function(){
                //     this.connectNim(); //这样就能将事件执行在界面渲染之后啦
                // })
                
            },
            // // 初始化聊天室
            // chatroomInit() {
            //     let _this = this;
            //     // console.log(Chatroom)
            //     this.chatroom = Chatroom.getInstance({
            //         appKey: config.appkey,
            //         account: cookie.readCookie('uid'), // aiyaya
            //         token: cookie.readCookie('sdktoken'), // ef4c06497767aaacebd1d71d7d86b6db
            //         chatroomId: _this.chatroomId,
            //         chatroomAddresses: _this.chatroomAddresses,
            //         onconnect: onChatroomConnect,
            //         onerror: onChatroomError,
            //         onwillreconnect: onChatroomWillReconnect,
            //         ondisconnect: onChatroomDisconnect,
            //         // 消息
            //         onmsgs: onChatroomMsgs
            //     });
            //     function onChatroomConnect(obj) {
            //         console.log('进入聊天室', obj);
            //         // 连接成功后才可以发消息
            //         // var msg = chatroom.sendText({
            //         //     text: 'hello',
            //         //     done: function sendChatroomMsgDone(msgObj) {
            //         //     }
            //         // })
            //     }
            //     function onChatroomWillReconnect(obj) {
            //         // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
            //         console.log('即将重连', obj);
            //     }
            //     function onChatroomDisconnect(error) {
            //         // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
            //         console.log('连接断开', error);
            //         if (error) {
            //             switch (error.code) {
            //                 // 账号或者密码错误, 请跳转到登录页面并提示错误
            //                 case 302:
            //                     break;
            //                 // 被踢, 请提示错误后跳转到登录页面
            //                 case 'kicked':
            //                     break;
            //                 default:
            //                     break;
            //             }
            //         }
            //     }
            //     function onChatroomError(error, obj) {
            //         console.log('发生错误', error, obj);
            //     }
            //     function onChatroomMsgs(msgs) {
            //         _this.chatList = _this.chatList.concat(msgs)
            //         console.log('收到聊天室消息', msgs);
            //         console.log(_this.chatList)
            //     }
            // },
            // connectNim() {
            //     let _this = this;
            //     this.chatroom = SDK.NIM.getInstance({
            //         // debug: true,
            //         appKey: config.appkey,
            //         account: cookie.readCookie('uid'), // aiyaya
            //         token: cookie.readCookie('sdktoken'), // ef4c06497767aaacebd1d71d7d86b6db
            //         db: config.useDb,
            //         syncSessionUnread: true,
            //         syncRobots: true,
            //         autoMarkRead: true, // 默认为true
            //         // // 消息
            //         onroamingmsgs: function (obj) {
            //             console.log(obj)
            //         },
            //         onofflinemsgs: function (obj) {
            //             console.log(obj)
            //         },
            //         onmsg: function (obj) {
            //             // _this.chatList.push(obj)
            //             console.log(obj)
            //         },
            //         onconnect: function onConnect(event) {
            //             // console.error('this', this)
            //             // _this.$router.push({path: '/Msg'})
            //             // _this.chatroom.getChatroomAddress({
            //             //     chatroomId: _this.playData[_this.index].roomid,
            //             //     done: getChatroomAddressDone
            //             // });
            //             // function getChatroomAddressDone(error, obj) {
            //             //     _this.chatroomAddresses = obj.address;
            //             //     _this.chatroomId = obj.chatroomId;
            //             //     _this.chatroomInit()
            //             //     console.log('获取聊天室地址' + (!error?'成功':'失败'), error, obj);
            //             // }
            //             // _this.nickName = this.account;
            //         },
            //         onfriends: function onFriends(obj) {
            //             console.log('onfriends', obj)
            //         },
            //         onerror: function onError(event) {
            //             alert('网络连接状态异常')
            //         },
            //         onwillreconnect: function onWillReconnect() {
            //             console.log(event)
            //         },
            //         ondisconnect: function onDisconnect(error) {
            //             switch (error.code) {
            //                 // 账号或者密码错误, 请跳转到登录页面并提示错误
            //                 case 302:
            //                     pageUtil.turnPage('帐号或密码错误', 'login')
            //                     break
            //                 // 被踢, 请提示错误后跳转到登录页面
            //                 case 'kicked':
            //                     let map = {
            //                         PC: '电脑版',
            //                         Web: '网页版',
            //                         Android: '手机版',
            //                         iOS: '手机版',
            //                         WindowsPhone: '手机版'
            //                     }
            //                     let str = error.from
            //                     let errorMsg = `你的帐号于${util.formatDate(new Date())}被${(map[str] || '其他端')}踢出下线，请确定帐号信息安全!`
            //                     pageUtil.turnPage(errorMsg, 'login')
            //                     break
            //                 default:
            //                     break
            //             }
                        
            //         },

            //     })
            // },
        }
    }
</script>
<style>
    body, html {
        width: 100%;
        height: 100%;
    }
    #app {
        width: 100%;
        height: 100%;
    }
    .chat-init {
        width: 100%;
        height: 100%;
        /* background: pink; */
        background: url('./img/time.jpg') no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: url('./img/time.jpg') */
        /* background-image: url('./img/time.jpg') */
    }
    .dialog {
        width: 1200px;
        height: 800px;
        background: #ffffff;
        border-radius: 5%;
        background: rgba(255,255,255, 0.5);
        display: flex;
        justify-content: center;
    }
    .left-list {
        background: pink;
        flex-grow: 1;
    }
    .right {
        flex-grow: 3;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .name {
        display: block;
        text-align: center;
        font-size: 20px;
        margin: 10px 0;
    }
</style>