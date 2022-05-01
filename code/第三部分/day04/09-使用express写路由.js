const express = require("express")

// 获取路由对象
const router = express.Router()

router.get("/get/user1", function(req, res) {
	// 获取查询的信息 
	res.send({
		code: 200,
		message: "数据访问成功",
		data: req.query
	})
})

router.post("/get/user2", function(req, res) {
	// 获取查询的信息 
	let bodyss = req.body
	res.send({
		code: 200,
		message: "数据访问成功",
		data: bodyss
	})
})

// 把路由暴露出去
module.exports = router