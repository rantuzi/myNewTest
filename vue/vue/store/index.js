import Vue from 'vue';
import Vuex from 'vuex';
import header from './header'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        header
    }
})