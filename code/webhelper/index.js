 // 导入关联的包
 const dateUtil = require("./src/dateUtil.js")

 //  向外暴露方法
 module.exports = {
 	//  使用...展开关联的包
 	...dateUtil
 }