//1： 使用Es6的语法,导入jquery的包, 使用$去进行接收
import $ from "jquery"

// 导入css
import "../css/index.css"

// 引入less
import "./index.less"

// 导入图片
import logo from "./dlam.png"
// 动态设置图片 
$(".box").attr("src", logo)

// 2： 定义jquery的入口函数
$(function() {
	// 3:实现奇数偶数换行变色

	// 奇数
	$("li:odd").css("background-color", "red")

	// 偶数
	$("li:even").css("background-color", "pink")
})

// 高级js
function info(target) {
	target.info = "Person info"
}

@info
class Person {}

console.log(Person.info)