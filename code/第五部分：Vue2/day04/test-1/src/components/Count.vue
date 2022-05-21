 <template>
	<div>
		<p>当前的值是：{{count}}</p>
		<button type="button" @click="add">自增加</button>

		<p>初始化的init值是：{{init}}</p>
	</div>
</template>

<script>
	export default {
		// 组件的名字
		name: 'WebDemoCount',

		// 自定义属性
		props: {
			"init": {
				// default 用来显示默认的值
				default: 1,
				// type：用来控制类型
				type: Number,
				// 必填项
				required: true
			}
		},

		data() {
			return {
				// 把外界传递过来的init转存到count身上
				count: this.init,
			};
		},

		mounted() {

		},

		methods: {
			add() {
				this.count += 1;
			}
		},
	};
</script>

<style lang="less">
	p {
		background-color: pink;
	}
</style>