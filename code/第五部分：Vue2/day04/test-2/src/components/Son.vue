<template>
	<div>
		<p>我是子类的组件，我的值是{{count}}}</p>
		<button @click="pass">我要向父类传值了！</button>
	</div>
</template>

<script>
	export default {
		name: 'Son',

		data() {
			return {
				// 1:子类定义数据
				count: 10
			};
		},

		methods: {
			pass() {
				// 2：子类通过 $emit（key,value） 方法，指定发动的key 和发送的数据
				// 注意：这里要使用this作为前缀
				this.$emit('event-connt', this.count);
			}
		},
	};
</script>

<style lang="less" scoped>

</style>