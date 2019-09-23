<template>
    <div class="chat-init">
        <div class="dialog">
            <h3 class="title">登录页</h3>
            <div class="content">
                <span class="label">账号</span>
                <input type="text" placeholder="限制2-20位字母或者数字" v-model='account'>
            </div>
            <!-- <span v-if='!accountReg' style="display: block;text-align: center;">限制2-20位字母或者数字</span> -->
            <div class="content">
                <span class="label">密码</span>
                <input type="text" placeholder="6-20位字母或者数字" v-model='password'>
            </div>
            <!-- <span v-if='!passwordReg' style="display: block;text-align: center;">6-20位字母或者数字</span> -->
            <div class="button">
                <span class="login-button" @click='buttonLogin'>登录</span>
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
    export default {
        name: 'chatInit',
        data () {
            return {
                account: '',
                nickName: '',
                password: '',
                accountReg: false,
                passwordReg: false,
            }
        },
        mounted() {
        },
        methods: {
            connectNim() {
                let _this = this;
                console.log(cookie.readCookie('uid'))
                console.log(cookie.readCookie('sdktoken'))
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
                        // _this.chatList.push(obj)
                        console.log(obj)
                    },
                    onconnect: function onConnect(event) {
                        // console.error('this', this)
                        _this.$router.push({path: '/Msg'})
                        // _this.chatroom.getChatroomAddress({
                        //     chatroomId: '3001',
                        //     done: getChatroomAddressDone
                        // });
                        // function getChatroomAddressDone(error, obj) {
                        //     _this.chatroomAddresses = obj.address;
                        //     _this.chatroomId = obj.chatroomId;
                        //     _this.chatroomInit()
                        //     console.log('获取聊天室地址' + (!error?'成功':'失败'), error, obj);
                        // }
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
            buttonLogin() {
                let sdktoken = md5(this.password)
                // this.password = sdktoken;
                cookie.setCookie('uid', this.account)
                cookie.setCookie('sdktoken', sdktoken)
                this.connectNim()  
            },
            object2query(obj) {
                let keys = Object.keys(obj)
                let queryArray = keys.map(item => {
                    return `${item}=${encodeURIComponent(obj[item])}`
                })
                return queryArray.join('&')
            },
        }
    }
</script>
<style ></style>
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
        width: 700px;
        height: 600px;
        background: #ffffff;
        border-radius: 5%;
        background: rgba(255,255,255, 0.5)
    }
    .title {
        text-align: center;
        font-size: 30px;
        margin: 20px 0;
    }
    .content {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
    .label {
        font-size: 20px;
    }
    input {
        width: 300px;
        height: 40px;
        border-radius: 5px;
        outline: none;
        border: none;
        margin-left: 10px;
        text-indent: 5px;
    }
    .button {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login-button {
        width: 350px;
        height: 40px;
        display: block;
        background: #3385ff;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 5px;
        margin-top: 40px;
    }
</style>