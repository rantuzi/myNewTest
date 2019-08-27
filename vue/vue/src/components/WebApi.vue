<template>
    <div class="WebApi">
        <ul data-name='点' data-age='12'>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
        </ul>
        <!-- hidden可直接隐藏div -->
        <div hidden>我消失了</div>
        <!-- 标签内容可编辑contenteditable -->
        <p class="title">元素类名</p>
        <p contenteditable>可编辑</p>
        <img src="" alt="">
    </div>
</template>
<script>
    export default {
        name: 'wepapi',
        data() {
            return {
                
            }
        },
        methods: {
            getNode() {
                // 获取父元素
                console.log(document.querySelector('li').closest('.WebApi'))
                // dataset 获取data属性
                console.log(document.querySelector('ul').dataset)
                // 获取地址栏参数==》router mode 为history时
                console.log(new URLSearchParams(location.search).get('name'))
                // 操作元素类名
                let elem = document.querySelector("p");
                // 增加类名
                elem.classList.add("title-new"); // "title title-new"
                // 删除类名
                elem.classList.remove("title"); // "title-new"
                // 切换类名（有则删、无则增，常用于一些切换操作，如显示/隐藏）
                elem.classList.toggle("title"); // "title-new title"
                // 替换类名
                elem.classList.replace("title", "title-old"); // "title-new title-old"
                // 是否包含指定类名
                elem.classList.contains("title"); // false
                // 获取指定元素在当前页面的空间信息
                console.log(elem.getBoundingClientRect())
                // 指定元素是否包含了指定的子元素
                document.querySelector("div").contains(document.querySelector("p")); // true
                // 监听当前的网络状态变动，然后执行对应的方法
                window.addEventListener("online", () => {
                    alert('有网！')
                });

                window.addEventListener("offline", () => {
                    alert("你断网啦！");
                });
                // 获取设备的电池状态
                navigator.getBattery().then(battery => console.log(battery));
                // 震动一次
                // navigator.vibrate(100);
                // 连续震动，震动200ms、暂停100ms、震动300ms
                // navigator.vibrate([200, 100, 300]);
                // 监听页面可见性变化
                document.addEventListener("visibilitychange", () => {
                    console.log(`页面可见性：${document.visibilityState}`);
                });
                // 陀螺仪，也就是设备的方向
                window.addEventListener("deviceorientation", event => {
                    let {
                        alpha,
                        beta,
                        gamma
                    } = event;

                    console.log(`alpha：${alpha}`);
                    console.log(`beta：${beta}`);
                    console.log(`gamma：${gamma}`);
                });
                
                // PC端的桌面通知
                Notification.requestPermission(prem => {
                    prem == "granted" // 同意
                    prem == "denied" // 拒绝
                })

                let permission = Notification.permission;

                if (permission == "granted") {
                    // 已同意，开始发送通知
                    const notice = new Notification("小冉冉", {
                        body: "这20个不常用的Web API真的有用吗?，别问，问就是有用🈶",
                        icon: "我的掘金头像",
                        data: {
                            url: "https://www.baidu.com"
                        }
                    });

                    // 点击回调
                    notice.onclick = () => {
                        window.open(notice.data.url); // 当用户点击通知时，在浏览器打开百度网站
                    }
                } else if (permission == "denied") {
                    // 不同意，发不了咯
                } else {
                    // 其他状态，可以重新发送授权提示
                    Notification.requestPermission();
                }
            }
        },
        mounted() {
            this.getNode()
        }
    }
</script>
<style>

</style>