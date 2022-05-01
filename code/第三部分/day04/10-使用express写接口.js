const express = require("express")

// 构建对象
const app = express()

// 添加支持json传参的全局中间件
app.use(express.json())

// 添加支持url-encoded 的全局中间件,用来获取表单中的数据
app.use(express.urlencoded({
	extended: false
}))

// 导入路由
const routes = require("./09-使用express写路由.js")

// 注册路由
app.use(routes)

app.listen(80, function() {
	console.log("服务器启动了！")
})