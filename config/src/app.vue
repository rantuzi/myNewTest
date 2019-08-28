<template>
    <div>你好啊{{ data }}</div>
</template>
<script>
    export default {
        data() {
            return {
                data: 'Vue'
            }
        }
    }
</script>
<style scoped>
    div {
        background: #cccccc;
    }
</style>