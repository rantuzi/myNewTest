<template>
    <div>
        <div class="title-nav">
            <div class="select">我的提醒</div>
            <div class="no-select">系统公告</div>
        </div>
        <div class="date">
            <div class="date-title">
                <span>{{today}}  {{mounth}}  {{year}}</span>
                <span>刷新</span>
            </div>
            <div class="data-section">
                <div>
                    <span v-for='(item, index) in day' :class='selectDay == index ? "today":""'>{{item}}</span>
                </div>
                <div>
                    <span v-for='(item, index) in dayText'  :class='selectDay == index ? "today":""'>{{item}}</span>
                </div>
                <div>
                    <span v-for='(item, index) in sevenDay' :class='item == today ? "today":""'>{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'change',
        data() {
            return {
                day: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                dayText: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                sevenDay: [],
                today: '',
                selectDay: '',
                year: '',
                mounth: ''
            }
        },
        methods: {
            getTime() {
                var t=new Date();
                this.today = t.getDate()
                this.selectDay = t.getDay()
                this.year = t.getFullYear()
                this.mounth = t.toDateString().split(" ")[1]
                t.setTime(t.getTime()-t.getDay()*24*60*60*1000);
                this.sevenDay = [0,1,2,3,4,5,6].map(_=>_+t.getDate())
                console.log(this.sevenDay)
            }
        },
        mounted() {
            this.getTime();
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .title-nav {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }

    .title-nav .select {
        width: 90px;
        height: 100%;
        line-height: 40px;
        margin: 0 10px;
        text-align: center;
        border-bottom: 2px solid blueviolet;
    }

    .title-nav .no-select {
        width: 90px;
        height: 100%;
        line-height: 40px;
        margin: 0 10px;
        color: #ccc;
        text-align: center;
        border-bottom: none;
    }
    .data-section div {
        display: flex;
        justify-content: space-around;
    }
    .today {
        background: blueviolet;
    }
</style>