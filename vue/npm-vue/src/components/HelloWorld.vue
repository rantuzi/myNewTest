<template>
    <div class="hello">
		  <!-- <Table></Table> -->
    </div>
</template>

<script>
import Table from './table/src/table.vue'
export default {
  	name: 'HelloWorld',
  	data () {
    	return {
      		propsdata: 'Welcome to Your Vue.js App'
    	}
  	},
	components: {
		Table
	}
}
</script>
