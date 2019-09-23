<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <TestNpmVue :data="msg"></TestNpmVue> -->
    <!-- <Table></Table> -->
    <!-- <button @click='toClickFn'>点击</button> -->
    <!-- 插槽 -->
    <!-- <v-one>
      <p>初始化段落一</p>
    </v-one>
    <v-two>
      <p slot="main">我是内容</p>
      <p slot="nav">我是导航</p>
      <p slot="footer">我是底部</p>
    </v-two>
    <v-three>
      <template slot-scope="props">
          <p>{{props.text}}</p>
      </template>
    </v-three> -->
    <!-- 动画 -->
    <!-- <button @click='show = !show'>点击</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <input type="text" v-focus/>
    <div></div> -->
    <el-row type="flex" class="row-bg">
      <el-col style="width:10%"><div class="grid-content bg-purple">标题</div></el-col>
      <el-col style="width:20%"><div class="info-content bg-purple-light">
          <el-input v-model="input" placeholder="请输入内容" style="background: none;"></el-input>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
  import TestNpmVue from 'test-npm-vue';
  import Table from '../newComponents/table.vue';
  import vOne from './testOne.vue';
  import vTwo from './testTwo.vue';
  import vThree from './testThree.vue';
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    components: {
      TestNpmVue,
      Table,
      vOne,
      vTwo,
      vThree
    },
    data() {
      return {
        msg: '你说什么',
        count: 0,
        num: 0,
        show: false,
        input: ''
      }
    },
    // 指令的定义
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          // console.log(el)
          el.focus()
        }
      }
    },
    render: (h) => {
      return h('input', {
                //给div绑定value属性
        props: {
          value: '33333'
        },
        //给div绑定样式
        style: {
        　　　width: '30px',
              height: '30px',
              background: 'red'
        },
        //给div绑定点击事件　　
        on: {
          click: () => {
            console.log('点击事件')
          }
        },
      })
    },
    methods: {
      toClickFn() {
        this.count++;
        this.num = this.count;
        window.localStorage.setItem('count', this.count)
      },
      async consoleOne() {
          console.log('consoleOne')
          // console.log('consoleOne')
      },
      // consoleTwo() {
      //   // return 'consoleTwo'
      //   console.log('consoleTwo')
      // }
    },
    mounted() {
      axios.get('https://raw.githubusercontent.com/apache/incubator-echarts/master/map/json/china.json').then(res =>{
        console.log(res);
      })
      // await this.consoleOne();
      // await this.consoleTwo();
      // await console.log(this.consoleOne());
      // await console.log(this.consoleTwo());
      this.consoleOne().then( v=> {
        // console.log(this.consoleTwo())
      })
      console.log('1111')
      // this.consoleTwo().then(v => {
      //   console.log(v)
      // })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
  }
</style>
<style>
    /* .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    } */
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      min-height: 36px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      padding-right: 10px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
    input {
      background: none;
    }
    .info-content {
      background: #fefcfb;
    }
  </style>