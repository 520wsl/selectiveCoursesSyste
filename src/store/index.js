import Vue from 'vue'
import vuex from 'vuex'
import Public from './Public'

Vue.use(vuex);

let Store = new vuex.Store({
    modules: {
        Public
    }
})

export default Store