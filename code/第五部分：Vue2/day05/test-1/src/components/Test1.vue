<template>
	<div class="container">
		<!-- 1：给组件设置ref的id -->
		<p ref="a_container" class="">我是自定义的Test1</p>
		<button @click="btn">点击改变p标签的内容</button>
	</div>
</template>

<script>
	export default {
		name: 'Test1Test1',

		methods: {
			btn() {
				// 2：使用指定id的ref组件
				this.$refs.a_container.style.backgroundColor = "skyblue"
			}
		},

	};
</script>

<style lang="less" scoped>
	.container {
		width: 50%;
		background-color: pink;
	}
</style>