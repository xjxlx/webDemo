<template>
	<div class="left-container" data-v="1">
		<h3 data-v="1">Left 组件</h3>
		<hr data-v="1" />
		<Count :init="7" data-v="1"></Count>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.left-container {
		padding: 0 20px 20px;
		background-color: orange;
		min-height: 250px;
		flex: 1;
	}

	h3 {
		background-color: pink;
	}

	::v-deep p {
		background-color: skyblue;
	}
</style>