// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import store from './store'
import Api from './api'
import moment from 'moment'

import '../static/utf8-php/ueditor.config'
import '../static/utf8-php/ueditor.all.min'
import '../static/utf8-php/lang/zh-cn/zh-cn'
import '../static/utf8-php/ueditor.parse.min'

Vue.config.productionTip = false

Vue.use(iView)

Vue.prototype.$ajax = Api;
Vue.prototype.$moment = moment;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
