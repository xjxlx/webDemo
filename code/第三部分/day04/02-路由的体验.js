// 导包
const express = require("express")
// 获取实例
const app = express()

// 引入路由的对象
const router = require("./01-模块化路由.js")

// 注册路由
app.use("/api",router)

// 启动服务器
app.listen(80, function() {
	console.log("服务器启动了！")
})