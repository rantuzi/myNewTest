<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <TestNpmVue :data="msg"></TestNpmVue>
    <Table></Table>
    <button @click='toClickFn'>点击</button>
  </div>
</template>

<script>
import TestNpmVue from 'test-npm-vue';
import Table from '../newComponents/table.vue';
export default {
  name: 'HelloWorld',
  components: {
    TestNpmVue,
    Table
  },
  data () {
    return {
      msg: '你说什么',
      count: 0,
      num: 0
    }
  },
  methods: {
    toClickFn() {
      this.count ++;
      this.num = this.count;
      window.localStorage.setItem('count', this.count)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
