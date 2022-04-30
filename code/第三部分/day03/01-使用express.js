// 1:导包
const express = require("express");

// 2：创建web服务器
const app = express();

// 3:调用listener启动服务器
app.listen(80, function() {
	console.log("express服务器启动了！")
})

// 4.1：监听请求
app.get("/user", function(request, response) {
	//1.1 request:请求的相关信息
	//1.2 response:响应的相关信息
	console.log("响应了get无参")

	//2.1 查询url中携带的参数， 客户端使用?name=张同学&age=20
	// 查询url中携带的参数 ,request.query 查询所有
	let query = request.query
	console.log("get的参数为：" + query)

	//2.2 获取单个参数 request.query.xxx
	let age = request.query.age
	console.log("get的参数 age 为：" + age)

	// response.send() 发送结果个客户端
	response.send(query)
})

// 4.2：监听请求
app.post("/user", function(request, response) {
	// request:请求的相关信息
	// response:响应的相关信息
	console.log("响应了post无参")

	// response.send() 发送结果个客户端
	response.send({
		name: '张三',
		age: '28'
	})
})

// 4.3：监听请求
app.get("/user/:ids/:name", function(request, response) {
	// 3.1通过request.params获取url中，通过：匹配到的动态参数
	let params = request.params
	console.log("动态参数为：" + params)

	console.log("动态参数：" + params.id)

	// response.send() 发送结果个客户端
	response.send(params)
})