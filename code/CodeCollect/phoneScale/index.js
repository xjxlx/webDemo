var vm = new Vue({
	el: ".app",
	data: {
		photoData: [
			{ id: 1, src: "./images/home_test_drive_1.jpg" },
			{ id: 2, src: "./images/home_test_drive_2.jpg" },
			{ id: 3, src: "./images/home_test_drive_3.jpg" },
			{ id: 4, src: "./images/home_test_drive_4.jpg" },
			{ id: 5, src: "./images/home_test_drive_5.jpg" },
			{ id: 6, src: "./images/home_test_drive_6.jpg" },
			{ id: 7, src: "./images/home_test_drive_7.jpg" },
			{ id: 8, src: "./images/home_test_drive_8.jpg" },
			{ id: 9, src: "./images/home_test_drive_9.jpg" }
		],
		appRoot: [],
		images: [],
		markParent: {},
		markContent: {},
		leftControl: {},
		rightControl: {},
		index: 0,
		src: ""
	},
	mounted() {
		this.initPhotoScale()
	},

	methods: {
		// 初始化图片缩放的数据
		initPhotoScale() {
			// 1：查找所有指定标签的img
			images = document.querySelectorAll(".photo_selectored")
			console.log(images)

			// 1.1 获取遮罩层的父布局 mark_image
			markParent = document.querySelector(".mark_parent")
			console.log(markParent)

			// 1.2 获取遮罩层中的图片对象 mark_image
			markContent = document.querySelector(".mark_image")
			console.log(markContent)

			// 1.3 获取根部的标签
			appRoot = document.querySelector(".app")

			// 1.4 获取左右两侧的标签 left
			leftControl = document.querySelector(".control_left")
			rightControl = document.querySelector(".control_right")
		},

		// 点击item的事件
		item_click(indexValue) {
			index = indexValue;
			console.log("index:" + index)
			if ((images != null) && (index < images.length)) {
				// 1：获取当前大选中的图片对象
				let imgSelected = images[index]
				// 2: 获取图片的src
				src = imgSelected.getAttribute("src")
				console.log(src)

				// 3:获取图片真实的宽高
				let realWidth = imgSelected.width
				let realHeight = imgSelected.height
				console.log("realWidth:" + realWidth)
				console.log("realHeight:" + realHeight)

				// 4:获取屏幕的宽高
				let windowW = document.documentElement.clientWidth;
				let windowH = document.documentElement.clientHeight;
				console.log("windowW:" + windowW)
				console.log("windowH:" + windowH)

				// 5:设置真实图片的宽高
				let imgWidth = 0;
				let imgHeight = 0

				// 6:求出缩放的比例
				let scale = 0.8; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放 
				let imageScale = realWidth / realHeight; //真实图片的宽高比例

				// 1:如果真实图片的宽度大于屏幕乘以固定比例的宽度
				let scaleWidth = windowW * scale;

				// 默认宽度 = 屏幕的缩放比例值
				imgWidth = scaleWidth;
				// 默认高度 = 默认宽度 / 图片的缩放比例
				imgHeight = imgWidth / imageScale;

				// 如果图片的取值高度 > 屏幕的高度 ，那么图片的高度 = 屏幕的高度，图片宽度 = 屏幕高度 * 图片的缩放比例
				if (imgHeight >= windowH) {
					imgHeight = windowH;
					imgWidth = imgHeight * imageScale;
				}

				// 7:控制遮罩层层显示
				markParent.style.display = "block"
				markParent.width = windowW
				markParent.height = windowH

				// 页面不可滑动
				appRoot.style.overflow = "hidden"

				// 8：控制点击关闭自己
				markParent.addEventListener("click", function() {
					markParent.style.display = "none"
					appRoot.style.overflow = "auto";
				})

				// 9:设置遮罩层的图片以及居中显示
				markContent.src = src
				markContent.width = imgWidth
				markContent.height = imgHeight

				let top = (windowH - imgHeight) / 2;
				let left = (windowW - imgWidth) / 2;
				markContent.style.left = left + "px"
				markContent.style.top = top + "px"

				// 10：定位左右侧按钮
				// 10.1 求出左右两侧--->每一边的间距
				let interval = (windowW - imgWidth) / 2;
				console.log("interval:" + interval)

				// 设置左侧按钮信息
				if (index > 0) {
					leftControl.style.display = "block"
					leftControl.width = interval
					let marginTopLeft = (windowH - leftControl.height) / 2;
					leftControl.style.left = 0
					leftControl.style.top = (marginTopLeft - interval) + "px"
					leftControl.style.paddingTop = interval + "px"
					leftControl.style.paddingBottom = interval + "px"
				} else {
					leftControl.style.display = "none"
				}

				// 设置右侧按钮信息
				if (index < images.length - 1) {
					rightControl.style.display = "block"
					rightControl.width = interval
					let marginTopRight = (windowH - rightControl.height) / 2;
					rightControl.style.left = (imgWidth + interval) + "px"
					rightControl.style.top = (marginTopRight - interval) + "px"
					rightControl.style.paddingTop = interval + "px"
					rightControl.style.paddingBottom = interval + "px"
				} else {
					rightControl.style.display = "none"
				}
			}
		},
		control_left(e) {
			e.stopPropagation()
			console.log("backItem")
			if (index > 0) {
				index -= 1
				this.item_click(index)
			}

		},
		control_right(e) {
			e.stopPropagation()
			console.log("nextItem")
			if (index < images.length - 1) {
				index += 1
				this.item_click(index)
			}
		}
	}
})

$(function() {
	$(".pic").click(function() {
		var _this = $(this); //将当前的pimg元素作为_this传入函数 
		imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
	});
});

function imgShow(outerdiv, innerdiv, bigimg, _this) {
	var src = _this.attr("src"); //获取当前点击的pimg元素中的src属性 
	$(bigimg).attr("src", src); //设置#bigimg元素的src属性 
	/*获取当前点击图片的真实大小，并显示弹出层及大图*/
	$("<img/>").attr("src", src).load(function() {
		var windowW = $(window).width(); //获取当前窗口宽度 
		var windowH = $(window).height(); //获取当前窗口高度 
		var realWidth = this.width; //获取图片真实宽度 
		var realHeight = this.height; //获取图片真实高度 
		var imgWidth, imgHeight;
		var scale = 0.8; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放 
		if (realHeight > windowH * scale) { //判断图片高度 
			imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放 
			imgWidth = imgHeight / realHeight * realWidth; //等比例缩放宽度 
			if (imgWidth > windowW * scale) { //如宽度扔大于窗口宽度 
				imgWidth = windowW * scale; //再对宽度进行缩放 
			}
		} else if (realWidth > windowW * scale) { //如图片高度合适，判断图片宽度 
			imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放 
			imgHeight = imgWidth / realWidth * realHeight; //等比例缩放高度 
		} else { //如果图片真实高度和宽度都符合要求，高宽不变 
			imgWidth = realWidth;
			imgHeight = realHeight;
		}
		$(bigimg).css("width", imgWidth); //以最终的宽度对图片缩放 
		var w = (windowW - imgWidth) / 2; //计算图片与窗口左边距 
		var h = (windowH - imgHeight) / 2; //计算图片与窗口上边距 
		$(innerdiv).css({ "top": h, "left": w }); //设置#innerdiv的top和left属性 
		$(outerdiv).fadeIn("fast"); //淡入显示#outerdiv及.pimg 
	});
	$(outerdiv).click(function() { //再次点击淡出消失弹出层 
		$(this).fadeOut("fast");
	});
}