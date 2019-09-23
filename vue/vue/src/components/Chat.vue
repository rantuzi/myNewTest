<template>
    <div>
        <div class="container">
            <h2 class="text-center">在线聊天室</h2>
            <p>昵称:{{nickName}}</p>
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
    export default {
        data() {
            return {
                ws: null,
                nickName: "",
                chatList: [],
                content: ""
            }
        },
        mounted() {
            this.nickName = prompt("input your name")
            this.ws = new WebSocket("ws://localhost:3000")
            this.ws.onopen = function () {
                console.log("连接成功")
            }
            var _this = this
            this.ws.onmessage = function (ev) {
                var item = JSON.parse(ev.data)
                _this.chatList.push(item)
            }
        },
        methods: {
            send() {
                var data = {
                    nickName: this.nickName,
                    content: this.content
                }
                //将信息发送到后端
                this.ws.send(JSON.stringify(data))
            }
        }
    }
</script>