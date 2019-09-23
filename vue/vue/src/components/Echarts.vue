<template>
    <div>
        <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    // Vue.prototype.$echarts = echarts
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: 'Carry Admin,欢迎登陆非车险理赔系统!', subtext: '2019年度任务量', },
                    tooltip: {},
                    color: ['#5290CC', '#ED8853'],
                    legend: {
                        tooltip: {
                            show: true
                        }
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: ['product', '本月处理量', '平均值'],
                    },
                    dataset: {
                        dimensions: ['product', '本月处理量', '平均值'],
                        source: [
                            { product: '三月', '本月处理量': 43.3, '平均值': 85.8 },
                            { product: '四月', '本月处理量': 83.1, '平均值': 73.4 },
                            { product: '五月', '本月处理量': 86.4, '平均值': 65.2 },
                            { product: '六月', '本月处理量': 72.4, '平均值': 53.9 },
                            { product: '七月', '本月处理量': 72.4, '平均值': 53.9 },
                        ]
                    },
                    // xAxis: {
                    //     data: ["三月", "四月", "五月", "六月", "七月"]
                    // },
                    xAxis: { type: 'category' },
                    yAxis: {
                        show: true,
                        name: ''
                    },
                    series: [
                        {
                            type: 'bar', barWidth: 15, label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            }
                        },
                        {
                            type: 'bar', barWidth: 15, label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                        }
                    ]
                });
            }
        }
    }
</script>
<style>
</style>