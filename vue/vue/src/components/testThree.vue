<template id="three">
    <div>
        <!-- 把数据传递给slot,这样父组件也可以访问three这个组件的数据 -->
        <slot :text="three"></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                three: '56789090'
            }
        }
    }
</script>