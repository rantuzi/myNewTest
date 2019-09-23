<template>
    <div :style="propsData.from == isMe ? 'text-align: end': ''">
        <span v-if='propsData.attach && propsData.attach.type == "memberExit"' style="display: block;
        text-align: center">{{propsData.attach.fromNick}}离开直播间</span>
        <span v-if='propsData.attach && propsData.attach.type == "memberEnter"' style="display: block;
        text-align: center">欢迎{{propsData.attach.fromNick }}进入直播间</span>
        <div class="other" v-if='propsData.from != isMe && propsData.type == "text"'>
            <img src="" alt="">
            <div style="    display: flex;
            flex-direction: column;
            margin-left: 20px;
        ">
                <span style="font-size: 12px;">{{propsData.fromNick}}:</span>
                <span v-if='propsData.type == "text"' id="img" class="bubble">{{propsData.text}}</span>
            </div>
        </div>
        <div class="mine" v-if='propsData.from == isMe && propsData.type == "text"'>
            <div>
                <!-- <span>{{propsData.fromNick}}:</span> -->
                <span v-if='propsData.type == "text"' id="img" class="mine-bubble">{{propsData.text}}</span>
            </div>
            <img src="" alt="">
        </div>
        <!-- <div v-if='propsData.from == isMe'>
            <span>{{propsData.fromNick}}:{{propsData.text}}</span>
        </div> -->
    </div>
</template>
<script>
    import emojiObj from '@/configs/emoji.js';
    import cookie from '../../utils/cookie.js';
    export default {
        props: {
            propsData: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                isMe: '',

            }
        },
        mounted() {
            // debugger/
            this.isMe = cookie.readCookie('uid');
            // console.log(this.propsData.name)
            var img = document.querySelectorAll('#img');
            if (emojiObj.emojiList.emoji[this.propsData.text]) {
                img[img.length-1].innerHTML = `<span>${this.propsData.fromNick}:</span><img src='${emojiObj.emojiList.emoji[this.propsData.text].img}'/>`
            }
            // if (propsData.text)
        }
    }
</script>
<style>
    .bubble:after{content:'';position:absolute;right:100%;top:0px;width:16px;height:16px;border-width:0;border-style:solid;border-color:transparent;border-bottom-width:10px;border-bottom-color:currentColor;border-radius:0 0 0 32px;color:#dddddd;}
    .bubble, .mine-bubble {
        position: relative;
        padding: 5px 9px;
        background: #dddddd;
        border-radius: 5px;
    }
    .mine-bubble:after{content:'';position:absolute;left:100%;top:0px;width:16px;height:16px;border-width:0;border-style:solid;border-color:transparent;border-bottom-width:10px;border-bottom-color:currentColor;border-radius:0 0 32px 0;color:#dddddd;}
    img {
        width: 50px;
        height: 50px;
        background: #dddddd;
        display: block;
        border-radius: 50%;
    }
    .mine {
        display: flex;
        justify-content: flex-end;
        line-height: 57px;
    }
    .mine-bubble {
        margin-right: 23px;
    }
    .other {
        display: flex;
    }
</style>