<template>
<div class="hello">
    {{data}}
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        data: {
            type: String,
            default: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.hello {
    width: 100%;
    height: 50px;
    background: -webkit-linear-gradient(left, red , blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, red , blue); /* 标准的语法 */
    /* background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
</style>
