<template>
  <div class="slide-show">
		<div class="jd_banner">
			<ul class="banner_images clearfix" ref="banner_images">
				<li><a href="#"><img src="./img/l8.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l1.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l2.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l3.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l4.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l5.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l6.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l7.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l8.jpg" alt=""></a></li>
				<li><a href="#"><img src="./img/l1.jpg" alt=""></a></li>
      </ul>
		</div>
  </div>
</template>

<script>
export default {
  methods: {
    banner () {
      	//1 获取变量
	// 屏幕的宽度
	var width = document.body.offsetWidth;
	// console.log(width);\

	//  获取 轮播图的ul
	var moveUl = this.$refs['banner_images']

	// 索引的li标签
	var index = 1;


	// 抽取的代码 提升代码的可读性,以及 降低维护的难度
	var startTransition = function () {
		moveUl.style.transition = 'all 1s';
	}

	var endTransition = function () {
		moveUl.style.transition = '';
	}

	// 由于 移动的距离 无法确定 所以提取为参数
	var setTransform = function (distance) {
		moveUl.style.transform = 'translateX('+distance+'px)';
	}


	// 开启定时器
	var timeId = setInterval(function () {
		// 累加
		index++;

		// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
		// moveUl.style.transition = 'all .3s';
		startTransition();

		// 修改 ul的位置
		// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		setTransform(index*width*-1);

	},3000);


	// 过渡 结束事件 用来 修正 index的值 并修改索引
	moveUl.addEventListener('webkitTransitionEnd',function () {

		//  如果 index 太大了
		if (index>8) {
			index = 1;

			// 关闭过渡
			// moveUl.style.transition = '';
			endTransition();

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index*width*-1);
		}else if(index<1){
			// 跳到倒数第二张
			index= 8;

			// 关闭过渡
			// moveUl.style.transition = '';
			endTransition();

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index*width*-1);
		}

		// 修改 索引li标签的 class

		// 有一个 1的 差值

	})

	var startX = 0;

	var moveX = 0;

	var distanceX = 0;

	moveUl.addEventListener('touchstart',function (event) {

		clearInterval(timeId);

		endTransition();

		startX = event.touches[0].clientX;

	})

	moveUl.addEventListener('touchmove',function (event) {
		moveX = event.touches[0].clientX - startX;
		setTransform(moveX+index*-1*width);
	})

	moveUl.addEventListener('touchend',function (event) {

		var maxDistance = width/3;

		if (Math.abs(moveX)>maxDistance) {
			if (moveX>0) {
				index--;
			}else{
				index++;
			}

			startTransition();

			setTransform(index*-1*width);

		}else{

			startTransition();

			setTransform(index*-1*width);
		}

		timeId = setInterval(function () {
			index++;
			startTransition();

			setTransform(index*width*-1);
		},1000)
	})
    }
  },
  mounted () {
    this.banner();
  }
}
// 加载完毕事件 在该事件中 写的js代码 去获取dom元素 就一定不会出现找不到的问题
</script>

<style scoped>
.jd_banner{
	width: 100%;
	/* 100px */
	overflow: hidden;
	/* 为了 索引 能够定位 所以 添加 positition */
	position: relative;
}

.jd_banner .banner_images{
	/* 10倍宽度 为了 在横向 放10张图片 */
	width: 1000%;
	/* 1000px */

	/* 默认 移动个一个 屏幕的宽度 注意是负数 */
	transform: translateX(-10%);
}

.jd_banner .banner_images li{
	float: left;
	width: 10%;
	/* 100px */
}

.jd_banner .banner_images li a{
	display: block;
	width: 100%;
}

.jd_banner .banner_images li a img{
	display: block;
	width: 100%;
}

/* 轮播图里面的 索引标签 */
.jd_banner .banner_index{
	position: absolute;
	bottom: 10px;
	left: 50%;
	margin-left: -44px;
}

.jd_banner .banner_index li{
	float: left;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	border: 1px solid white;
	margin-left: 5px;
}
/* 如果 li标签 有.current class 会使用 下列样式
	注意 .current 不能 空格
 */
.jd_banner .banner_index li.current{
	background-color: black;
}


/* 导航 */
.jd_nav{
	width: 100%;
	border-bottom: 1px solid #ccc;
	background-color: white;
}
.jd_nav ul{
	width: 100%;
	/* 把内容 压下来 */
	padding-top: 5px;
}
.jd_nav ul li{
	float: left;
	width: 25%;
}
.jd_nav ul li a{
	width: 100%;
	display: block;
}
.jd_nav ul li a img{
	width: 60%;
	display: block;
	margin: 0 auto;
}
.jd_nav ul li a p{
	color: gray;
	text-align: center;
	padding:5px 0 ;
}

</style>
