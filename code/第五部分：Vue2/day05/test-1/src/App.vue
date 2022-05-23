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

		data() {
			return {
				array: ["1", "2", "3", "4", "5", "6"],
				array2: [1, 2, 3, 4, 5, 6]
			};
		},

		components: {
			Test1
		},

		methods: {
			leftBtn() {
				// 2:使用test组件去控制变色
				this.$refs.test.btn()

				// 1：this,什么时候该用，什么时候不该用
				// 2：this.than
				//  ==>写法的问题

				this.array.forEach(function(item, index) {
					//item 就是当日按循环到的对象
					//index是循环的索引，从0开始
					console.log("item: " + item + " index: " + index)
				})

				// 1：测试some方法
				this.array.some(function(item, index) {
					console.log("查找索引")

					if (item == 3) {
						console.log("找到了索引")
						return false
					}
				})

				// 2：测试every方法
				let every = this.array.every(function(item, index) {
					return item != null
				})

				console.log("every:" + every)

				// 3：测试filter
				let filter = this.array2.filter(function(item, index) {
					return item > 3
				})
				console.log(filter)
				// console.log() => {4,5,6}

				// 4：测试required方法
				// previousValue : 上一次调用 callbackFn 时的返回值,在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]
				// currentValue : 数组中正在处理的元素,在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]
				// currentIndex : 数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始
				let reduce = this.array2.reduce(function(previousValue, currentValue, currentIndex) {
					console.log("previousValue:" + previousValue + " currentValue:" + currentValue + " currentIndex:" + currentIndex)

					return previousValue += currentValue
				})
				console.log(reduce)
			},

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