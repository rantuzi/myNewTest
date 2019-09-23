<template>
    <div class="chat-init">
        <div class="dialog">
            <h3 class="title">账号注册页</h3>
            <div class="content">
                <span class="label">账号</span>
                <input type="text" placeholder="限制2-20位字母或者数字" v-model='account'>
            </div>
            <!-- <span v-if='!accountReg' style="display: block;text-align: center;">限制2-20位字母或者数字</span> -->
            <div class="content">
                <span class="label">昵称</span>
                <input type="text"  v-model='nickName'>
            </div>
            <div class="content">
                <span class="label">密码</span>
                <input type="text" placeholder="6-20位字母或者数字" v-model='password'>
            </div>
            <!-- <span v-if='!passwordReg' style="display: block;text-align: center;">6-20位字母或者数字</span> -->
            <div class="button">
                <span class="register-button" @click='buttonRegister'>注册</span>
                <span class="login-button" @click='toLogin'>登录</span>
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
            let a = document.querySelector('.login-button');
            // a.innerHTML = `<span>6666</span>`
            // console.log(a.innerHTML)
            // let p = document.createElement('p');
            // p.innerHTML = `<span>6666</span>`
            // a.appendChild(p)
        },
        methods: {
            buttonRegister() {
                let accountReg = /^(\d|[a-zA-Z]){2,20}$/.test(this.account);
                let passwordReg = /^(\d|[a-zA-Z]){2,20}$/.test(this.password);
                if (!accountReg) {
                    alert('限制2-20位字母或者数字')
                    return
                }
                if (!passwordReg) {
                    alert('6-20位字母或者数字')
                    return
                }
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
                                alert("注册成功")
                                // 跳转登录
                            } else if (data.res === 414) {
                                alert(data.errmsg)
                                this.errorMsg = data.errmsg
                            } else {
                                alert(data.errmsg)
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
            object2query(obj) {
                let keys = Object.keys(obj)
                let queryArray = keys.map(item => {
                    return `${item}=${encodeURIComponent(obj[item])}`
                })
                return queryArray.join('&')
            },
            toLogin() {
                this.$router.push({path: '/login'})
            }
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
    .register-button {
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
    .login-button {
        width: 350px;
        height: 40px;
        display: block;
        background: #fff;
        text-align: center;
        line-height: 40px;
        color: #000;
        border-radius: 5px;
        margin-top: 40px;
    }
</style>