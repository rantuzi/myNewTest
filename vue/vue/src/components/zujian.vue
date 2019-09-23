<template>
    <div>
        <span v-if='propsData.attach && propsData.attach.type == "memberExit"'>{{propsData.attach.fromNick}}离开直播间</span>
        <span v-if='propsData.attach && propsData.attach.type == "memberEnter"'>欢迎{{propsData.attach.fromNick }}进入直播间</span>
        <span v-if='propsData.type == "text"' id="img">{{propsData.fromNick}}:{{propsData.text}}</span>
    </div>
</template>
<script>
    import emojiObj from '../configs/emoji.js'
    export default {
        props: {
            propsData: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {

            }
        },
        mounted() {
            var img = document.querySelectorAll('#img');
            if (emojiObj.emojiList.emoji[this.propsData.text]) {
                img[img.length-1].innerHTML = `<span>${this.propsData.fromNick}:</span><img src='${emojiObj.emojiList.emoji[this.propsData.text].img}'/>`
            }
            // if (propsData.text)
        }
    }
</script>