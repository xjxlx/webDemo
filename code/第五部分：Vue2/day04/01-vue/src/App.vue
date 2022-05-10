<template>
	<div class="app">
		<p>我是App的Vue</p>

		<!-- 3:开始使用 -->
		<CustomLeft></CustomLeft>
		<CustomRight></CustomRight>
	</div>
</template>

<script>
	// 1:导入组件
	import Right from "@/components/Right.vue";
	import Left from "@/components/Left.vue";

	export default {
		// 2：注册组件
		components: {
			CustomLeft: Left,
			CustomRight: Right,
		},
	};
</script>