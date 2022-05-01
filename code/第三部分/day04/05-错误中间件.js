const express = require("express");

const app = express()

// 不捕获错误的情况，程序直接崩溃
app.get("/user", function(request, response) {
	throw new Error("发生了异常！222")
	response.send("哈哈哈")
})

// 捕获异常的中间件，必须放到路由的后面，否则无法捕获错误信息
app.use(function(err, req, res, next) {
    console.log(err.message)
    // 把错误信息通过res发送出去.
	res.send("error: " + err.message)
})

app.listen(80, function() {
	console.log("服务器启动了！")
})