<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<div class="container">
			<Left>我是Left</Left>
			<Right>我是Right</Right>
		</div>
	</div>
</template>

<script>
	import Left from "@/components/Left.vue"
	import Right from "@/components/Right.vue"

	export default {
		name: 'App',
		components: {
			Left,
			Right
		}
	}
</script>

<style lang="less" scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;

		.container {
			display: flex;
		}
	}
</style>