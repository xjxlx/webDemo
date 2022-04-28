// 1:读取文件和写入文件需要使用fs
// 1.1 获取fs  
const fs = require('fs')

// 2:读取文件
// 2. 调用 fs.readFile() 方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  data
//    如果发现参数上有options:属性,则说明该属性是可选的

fs.readFile('./files/2.txt', 'utf8', function(err, dataStr) {
	// 2.1 打印失败的结果
	// 如果读取成功，则 err 的值为 null
	// 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
	console.log(err)
	console.log('-------')
	// 2.2 打印成功的结果
	console.log(dataStr)
})