import Vue from 'vue'
// import App from './App.vue'
import custom from './custom1.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(custom),
}).$mount('#app')