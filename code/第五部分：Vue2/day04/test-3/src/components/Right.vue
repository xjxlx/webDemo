<template>
	<div class="right-container">

		<p>我是右侧的数据</p>
		<p>{{info}}</p>
	</div>
</template>

<script>
	// 1:导入EventBus.js
	import bus from "@/components/EventBus.js"

	export default {
		name: 'WebDemoRight',

		data() {
			return {
				info: {}
			};
		},

		// 2:在created方法中接收
		created() {
			// 3：使用bus.$on(key,(e)=>{ }) 去接收
			bus.$on("key_send", (e) => {
				console.log(e)
				// 4：数据转存
				this.info = e
				console.log("--->" + this.info)
			})
		},
	};
</script>

<style lang="less" scoped>
	.right-container {
		width: 50%;
		background-color: skyblue;
		height: 200px;
	}
</style>