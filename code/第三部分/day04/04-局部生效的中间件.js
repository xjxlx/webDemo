const express = require("express")

const app = express()
// 定义中间件
const zhj1 = function(request, response, next) {
	console.log("定义了中间件功能-1！")
	// 此处必须调用next函数，表示把中间件流转到下一个中间件或者路由
	next()
}
const zhj2 = function(request, response, next) {
	console.log("定义了中间件功能-2！")
	// 此处必须调用next函数，表示把中间件流转到下一个中间件或者路由
	next()
}

// 注册中间件
// app.use(zhj)
app.get("/api/v1/user", [zhj1,zhj2], function(request, response) {
	console.log("我是get请求方法！")
	response.send(request.method + " --- " + request.url)
})

app.post("/api/v1/user", function(request, response) {
	console.log("我是post请求方法！")
	response.send(request.method + " --- " + request.url)
})

app.listen(80, function() {
	console.log("服务器启动了！")
})