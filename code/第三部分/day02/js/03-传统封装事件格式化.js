// 定义格式化事件的模块
function parstDate(dates) {
	const dateValue = new Date(dates)
	let year = dateValue.getFullYear()
	let month = bZeros(dateValue.getMonth() + 1)
}

// 补零的操作
function bZeros(number) {
	return (number > 9) ? number : "0" + number
}

// 把对象共享出去
module.exports = {
	parstDate
}

module.exports = {
	parstDate()
}