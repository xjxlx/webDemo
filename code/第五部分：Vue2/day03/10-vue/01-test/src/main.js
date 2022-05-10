// 1：导入vue这个包，得到Vue的构造函数
import Vue from 'vue'
// 2：导入App.vue这个根组件,将来要把App.vue中的模板结构,渲染到html中
// import App from './App.vue'
import test from './test.vue'

Vue.config.productionTip = false

// 3：创建vue实例
new Vue({
	// 4：把render 函数指定的组件，渲染到 指定的html页面中
	render: h => h(test),
	// 5：这里要么使用el:"#app"去手动指定区域，
	// 要么使用.$mount('#app')去动态指定区域，效果是一样的
}).$mount('#app')