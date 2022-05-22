<template>
	<div class="left-container">
		<p>{{info.msg}}</p>

		<button @click="send">点击给兄弟发送数据</button>
	</div>
</template>

<script>
    // 1:导入eventBus.js
	import bus from "@/components/EventBus.js"

	export default {
		name: 'WebDemoLeft',

		data() {
			return {
				info: {
					count: 1,
					msg: "我是左侧的数据！"
				}
			};
		},

		methods: {
			send() {
                // 2:使用bus.$emit(key,value)去发送数据
				bus.$emit("key_send", this.info)
			}
		},
	};
</script>

<style lang="less" scoped>
	.left-container {
		width: 50%;
		background-color: pink;
		height: 200px;
	}
</style>