<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div class="content">
			<left class="left">Vue-Left</left>
			<right class="right">Vue-Right</right>
		</div>
		<CommonVue>我是公共组件</CommonVue>
	</div>
</template>
<script>
	// 1:导入组件-->私有组件
	import Left from "@/components/Left.vue";
	import Right from "@/components/Right.vue";

	export default {
		name: "App",
		components: {
			// 2:注册组件
			left: Left,
			right: Right,
		},
	};
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

	.content {
		display: flex;
	}

	.left {
		width: 50%;
	}

	.right {
		width: 50%;
	}
</style>