// 导入webpack的依赖
const path = require("path")

// -----------------
// 1:导入插件
const HtmlPlugin = require("html-webpack-plugin")
// 2：创建对象
const htmlPlugin = new HtmlPlugin({
	// 指定复制那个界面
	template: "./code/第五部分：Vue2/day01/01-test_webpack/src/index.html", // 指定源文件存放的路径
	// 指定复制出来的文件名和路径
	filename: "./index.html" // 指定生成文件存放的路径
})

// 使用node的语法,到处对象
module.exports = {
	mode: "development", // mode 是指定构建模式的，development 是开发模式，production 是上线模式

	// 从新设置webpack的入口
	entry: {
		// path:修改路径
		// __dirname 当前文件的存放路径
		path: path.join(__dirname, "./code/第五部分：Vue2/day01/01-test_webpack/src/index.js")
	},
	// 存放的目录
	output: {
		// 存放的路径
		path: path.join(__dirname, "dist"),
		// 生成文件的名字
		filename: "bundle.js"
	},
	// 用来解决无法直接预览页面，报错Cannot GET的问题
	devServer: {
		static: {
			directory: path.join(__dirname, './'),
			watch: true
		},
		open: true, // 初次打包后，自动打开浏览器
		host: "127.0.0.1", // 实时打包所使用的主机地址
		// port: "80" // 实时打包使用的端口号,80端口，是默认的，可以省略
	},
	//3：通过plugins节点，使htmlplugin插件生效
	plugins: [htmlPlugin],

	module: {
		rules: [
			// 处理css文件
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},

			// 处理less文件
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},

			// 处理file文件 和 url
			{
				test: /\.jpg|png|gif$/,
				// 其中 ? 之后的是 loader 的参数项： 
				// 1:limit 用来指定图片的大小，单位是字节（byte）
				// 2:只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片
				use: ["url-loader?limit-22229"]
			},

			// 处理 高级的js语法
			{
				// 指定格式
				test: /\.js$/,
				// 声明加载器
				use: ["babel-loader"],
				// 排除指定的选项，因为node_modules目录下的第三方包，不需要被打包
				exclude: /node_modules/
			}
		]
	}
}