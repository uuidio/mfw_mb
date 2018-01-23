<template>
  <!-- nav -->
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  <nav class="nav_1">
      <ul class="nav-xia">
          <li><router-link to="/index" active-class="active">首页</router-link></li>
          <li><router-link to="/jieban" active-class="active">结伴</router-link></li>
          <li><router-link to="/dangdiyou" active-class="active">当地游</router-link></li>
          <li><router-link to="/shangdian" active-class="active">马蜂窝商店</router-link></li>
          <li><router-link to="/local" active-class="active">当地人</router-link></li>
      </ul>
  </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
@charset "utf-8";
/* 禁用iPhone中Safari的字号自动调整 */
html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
/* 去除iPhone中默认的input样式 */
input[type="submit"],

input[type="reset"],

input[type="button"],

input{-webkit-appearance:none; resize: none;}
/* 取消链接高亮  */
body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article,
aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section{ -webkit-tap-highlight-color:rgba(0, 0, 0, 0); }
/* 设置HTML5元素为块 */
article, aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section {
display: block;
}
/* 图片自适应 */
img {
max-width: 100%;
height: auto;
width:auto\9; /* ie8 */
-ms-interpolation-mode:bicubic;/*为了照顾ie图片缩放失真*/
}
/* 初始化 */
body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article,
aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section{margin:0; padding:0; border:none;}
body{font-family: '微软雅黑',Microsoft YaHei,Tahoma,Arial,sans-serif; color:#555; background-color:#fff;}
em,i{font-style:normal;}
strong{font-weight: normal;}
.clearfix:after{content:""; display:block; visibility:hidden; height:0; clear:both;}
.clearfix{zoom:1;}
a{text-decoration:none; color:#969696; font-family: '微软雅黑',Microsoft YaHei,Tahoma,Arial,sans-serif;}
a:hover{color:#FED503; text-decoration:none;}
ul,ol{list-style:none;}
h1, h2, h3, h4, h5, h6{ font-size:100%; font-family: Microsoft YaHei;}
img{border: none;}
.wrap{min-width:320px; max-width:540px;margin:0 auto;}

 /* 400 以下   400  -  480 一档  480 以上的是一档  */

 @media screen and (max-width:399px) {
    html{
        font-size: 15px;
    }
 }
 @media (min-width: 400px) and (max-width: 480px) {
    html{
        font-size: 20px;
    }
 }
/*对于设计图来说，我们是用这个作为相对单位*/
 @media screen and (min-width: 481px) {
    html{
        font-size: 25px;
    }
 }
.nav_1{
  max-width: 540px;
  min-width: 320px;
  left: 0;
  right: 0;
  margin:0 auto;
  width:100%;
  border-bottom:1px solid #f2f2f2;
  position: fixed;
  bottom: 0;
  background: #fcfafa;}

.nav_1 ul{
  width:100%;
  height:4.04rem;}

a.active{
  border-bottom:2px #007acc solid;
}
.nav_1 .nav-shang li, .nav_1.nav-xia li{
  float:left;
  width:20%;
  height:4.04rem;}

 .nav_1 .nav-shang li a,.nav_1 .nav-xia li a{
  width:100%;
  height:100%;
  display:block;
  padding-top:0.56rem;
  box-sizing:border-box;color:#333333;
  font-size:12px;
  color:#333333;
  text-align:center;}

.nav_1 .nav-shang li a:hover,.nav_1 .nav-xia li a:hover{
  color:#333333;}

.nav_1 .nav-shang li a:before,.nav_1 .nav-xia li a:before{
  content:"";
  width:1.68rem;
  height:1.84rem;
  display:block;
  background:url(./assets/img/i_nav3.png) no-repeat;
  background-size:10.4rem 3.68rem;
  margin:0 auto;
  margin-bottom:0.28rem;}

.nav_1 .nav-shang li:nth-of-type(2) a:before{
  background-position:-1.68rem 0;}

.nav_1 .nav-shang li:nth-of-type(3) a:before{
  background-position:-3.36rem 0;}

.nav_1 .nav-shang li:nth-of-type(4) a:before{
  background-position:-5.04rem 0;}

.nav_1 .nav-shang li:nth-of-type(5)>span:before{
  background-position:-6.72rem 0;}

.nav_1 .nav-shang li:nth-of-type(5)>span,.nav_1 .nav-xia li:nth-of-type(5)>span{
  position:relative;
  width: 100%;
  height: 100%;
  display: block;
  padding-top: 0.56rem;
  box-sizing: border-box;
  color: #333333;
  font-size: 12px;
  color: #333333;
  text-align: center;}

.nav_1 .nav-shang li:nth-of-type(5) span span,.nav_1 .nav-xia li:nth-of-type(5) a span{
  width:0.64rem;
  height:0.68rem;
  display:block;
  background:url(./assets/img/i_nav3.png) -7.2rem -2rem no-repeat;
  background-size:10.4rem 3.68rem;
  position:absolute;
  left:50%;
  margin-left:-0.32rem;
  top:1.12rem;
  transform:rotate(180deg);}

.nav_1 .zhankai>span:before{content:"";
  width:1.68rem;
  height:1.84rem;
  display:block;
  background:url(./assets/img/i_nav3.png) no-repeat;
  background-size:10.4rem 3.68rem;
  margin:0 auto;
  margin-bottom:0.28rem;}
.nav_1 .nav-xia li{
  width: 20%;
  float: left;
}
.nav_1 .nav-xia li:nth-of-type(1) a:before{
  background-position:-8.4rem 0;}

.nav_1 .nav-xia li:nth-of-type(2) a:before{
  background-position:0 -1.84rem;}

.nav_1 .nav-xia li:nth-of-type(3) a:before{
  background-position:-1.68rem -1.84rem;}

.nav_1 .nav-xia li:nth-of-type(4) a:before{
  background-position:-3.36rem -1.84rem;}

.nav_1 .nav-xia li:nth-of-type(5) a:before{
  background-position:-5.04rem -1.84rem;}

</style>
