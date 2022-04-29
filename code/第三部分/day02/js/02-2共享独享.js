const name = "张三"

// 共享自定义的模块变量 
module.exports.user_name = name

module.exports.syHello = function() {
	console.log("啦啦啦！")
}
module.exports.sss = {
	"name": "张三",
	"age": "19"
}