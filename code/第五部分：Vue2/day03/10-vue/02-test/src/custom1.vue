<template>
	<!-- 定义dom -->
	<div id="app">
		<p>我的内容是:{{contents}}</p>
		<button @click="changesd">点击改变数据</button>
	</div>
</template>


<style lang="less">
	/* 定义style */
	#app {
		p {
			background-color: brown;
			font-size: 30px;
			font-weight: 700px;
		}
	}
</style>


<script>
	// 定义js
	export default {
		// 定义变量区
		data() {
			return {
				contents: "张三",
			};
		},
		// 定义方法区
		methods: {
			changesd() {
				this.contents = "娃哈哈"
			}
		},
		// 定义监听器
		watch() {},
		// 定义过滤器
		filter() {}
	};
</script>