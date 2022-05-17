import Vue from 'vue'
import App from './App.vue'

// 1:在Main.js中引入
import CommonVue from './components/CommonVue.vue'

// 2:声明组件
Vue.component('CommonVue', CommonVue)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')