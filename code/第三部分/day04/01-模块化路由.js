// 为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。
// 将路由抽离为单独模块的步骤如下：
// ① 创建路由模块对应的 .js 文件
// ② 调用 express.Router() 函数创建路由对象
// ③ 向路由对象上挂载具体的路由
// ④ 使用 module.exports 向外共享路由对象
// ⑤ 使用 app.use() 函数注册路由模块

// 导包
const expect = require('express')

// 获取路由对象
const router = expect.Router()

// 挂载路由
router.get('/user/list', function(request, response) {
	console.log("我是路由的get方法" + request.method + " --- " + request.url)
	response.send(request.method + " --- " + request.url)
})

router.post('/user/list', function(request, response) {
	console.log("我是路由的post方法" + request.method + " --- " + request.url)
	response.send(request.method + " --- " + request.url)
})

// 把路由的对象暴露出去
module.exports = router