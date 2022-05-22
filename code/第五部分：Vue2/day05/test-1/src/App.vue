<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<!-- 1:给自定义组件设置ref的id -->
		<Test1 ref="test"></Test1>

		<button @click="leftBtn">获取Left的组件</button>
	</div>
</template>

<script>
	import Test1 from "@/components/Test1.vue"

	export default {
		name: 'App',
		components: {
			Test1
		},
		methods: {
			leftBtn() {
				// 2:使用test组件去控制变色
				this.$refs.test.btn()
			}
		},
	}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>