<template>
	<div id="app">

		<img alt="Vue logo" src="./assets/logo.png">
		<!-- 1:在子类标签上使用
             1.1：@event-connt（子类定义的发送key）接收
             1.2：并指定SonCount方法数据 -->
		<Son @event-connt="SonCount"></Son>
	</div>
</template>

<script>
	import Son from "@/components/Son.vue";

	export default {
		name: 'App',
		components: {
			Son
		},
		methods: {
			// 2：在方法中获取接收到的数据
			SonCount(e) {
				console.log("接收到父类发送过来的数据：" + e)
				// 接收到父类发送过来的数据：10
			}
		}
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