// 返回现在的时间，以   YYYY-MM-DD HH:mm:ss的格式返回过去
function getNowTime() {
	const date = new Date();

	const year = date.getFullYear()
	const month = zeroize(date.getMonth() + 1)
	const day = zeroize(date.getDate())
	const hour = zeroize(date.getHours())
	const minute = zeroize(date.getMinutes())
	const second = zeroize(date.getSeconds())

	return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

// 补零的方法
function zeroize(n) {
	return n > 9 ? n : "0" + n
}

// 暴露自定义的方法出去
module.exports = {
	getNowTime
}