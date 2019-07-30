<template>
    <div class="hello">
      	<Mag :data='propsdata'></Mag>
    </div>
</template>

<script>
import Mag from './Mag.vue'
export default {
  	name: 'HelloWorld',
  	data () {
    	return {
      		propsdata: 'Welcome to Your Vue.js App'
    	}
  	},
	components: {
		Mag
	}
}
</script>
