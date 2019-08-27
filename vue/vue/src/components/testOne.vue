<template id="one">
    <div>
        <!-- <h1>组件标题</h1> -->
        <slot>{{one}}</slot>
        <!-- <p>{{one}}</p> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                one: 'I am one'
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {

        },
        components: {
            
        }
    }
</script>