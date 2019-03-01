//logoTop
$(".logoTop-con-r ul .li2").mouseover(function(){
	$(".myShop").css("display","block");
	$(this).css("background","#fff");
})
$(".myShop").mouseover(function  () {
	$(".myShop").css("display","black");
})
$(".myShop").mouseout(function  () {
	$(".myShop").css("display","none");
})
$(".logoTop-con-r ul .li2").mouseout(function(){
	$(this).css("background","#f2f2f2");
	$(".myShop").css("display","none");
	
})
$(".logoTop-con-r ul .li3").mouseover(function(){
	$(".cart").css("display","block");
	$(this).css("background","#fff");
})
$(".cart").mouseover(function  () {
	$(".cart").css("display","black");
})
$(".cart").mouseout(function  () {
	$(".cart").css("display","none");
})
$(".logoTop-con-r ul .li3").mouseout(function(){
	$(this).css("background","#f2f2f2");
	$(".cart").css("display","none");
	
})
$(".logoTop-con-r ul .li5").mouseover(function(){
	$(".li5-list").css("display","block");
	$(this).css("background","#fff");
})
$(".cart").mouseover(function  () {
	$(".li5-list").css("display","black");
})
$(".li5-list").mouseout(function  () {
	$(".li5-list").css("display","none");
})
$(".logoTop-con-r ul .li5").mouseout(function(){
	$(this).css("background","#f2f2f2");
	$(".li5-list").css("display","none");
	
})
$(".logoTop-con-r ul .li6").mouseover(function(){
	$(".li6-list").css("display","block");
	$(this).css("background","#fff");
})
$(".li6-list").mouseover(function  () {
	$(".li6-list").css("display","black");
})
$(".li6-list").mouseout(function  () {
	$(".li6-list").css("display","none");
})
$(".logoTop-con-r ul .li6").mouseout(function(){
	$(this).css("background","#f2f2f2");
	$(".li6-list").css("display","none");
	
})
var navConList = document.getElementById("navCon-ul").children;
for (var i = 0;i<navConList.length;i++) {
	navConList[i].onmouseover=function(){
		this.style.borderBottom="2px solid red";
		
	}
	navConList[i].onmouseout=function(){
		this.style.borderBottom="";	
	}
}
//maxImg右切换栏
var $maxImgList = $("#maxImg-ul>li");
$maxImgList.bind({
	mouseover:function  () {
		$(this).css({"background":"#fff","color":"red"})
		$(this).children().css("color","red")
		$(this).children("div").css("display","block")
	},
	mouseout:function(){
		$(this).css("background","darkred");
		$(this).children().css("color","#fff")
		$(this).children("div").css("display","none")
		
	}
})
/*var $alist=$(".maxImg-con-r-bot>a");
var $botList = $(".bot-1");
$alist.bind({
	mouseover:function  () {
		var index = $(this).index();
		$(this).css("background","#fff");
	}
})*/

$(function(){
	var $list = $(".maxImg-con-r-bot ul li");
		$cons = $(".maxImg-con-r-bot .clear");
	$list.mouseover(function(){
		$(this).addClass("ccc")
			   .siblings()
			   .removeClass("ccc");
		var index =$(this).index();
		$cons.eq(index)
			 .addClass("bot-1")
			 .siblings()
			 .removeClass("bot-1");
	})
})
//maxImg右上轮播
var $imgList = $(".maxImg-con-r-top img"); 
//$(function  () {
	var timer = setInterval(auto,1500);
	var index = 0;
	function auto () {
		if(index == $imgList.length){
			index=0;
		}
		$imgList.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		index++;
	}
//})
//maxImg大轮播
$(function(){var $maxImgC =$(".maxImgList img");
var $dlList = $(".maxImg-con-c dl dt");
var timera = setInterval(ImgAuto,1000)
var index=0;
function ImgAuto () {
	index++;
	if(index==$maxImgC.size()){
		index=0;
	}
	$dlList.eq(index).addClass("dt1").siblings().removeClass("dt1");
	$maxImgC.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	};
	$dlList.mouseenter(function  () {
		clearInterval(timera);
		var index = $(this).index();
		$(this).addClass("dt1").siblings().removeClass("dt1");

		$maxImgC.eq(index).fadeIn().siblings().fadeOut();
		
	})
	$dlList.mouseout(function  () {
		timera = setInterval(ImgAuto,1000);

	})
})

//zeroF数据请求；

window.onload = function  () {
	//请求json数据
	var dat = $.ajax({
		type:"get",
		url:"js/indexWine.json",
		async:true
	});
	//接收，处理数据
	dat.done(function (json){
	var title = ""
	for (var attr in json) { //遍历数据取键
		title+=`<ul class = "${attr} t" data-name = "${attr}"></ul>`
	}
	$(".zeroF-con").append(title);
		$(".t").each(    
			function  () {   //遍历ul取出自定义键名
				var uname =  $(this).data("name");
				var tit = "";
				for (var i = 0;i<json[uname].length; i ++) {
					var pagas = json[uname][i];
						tit+=`<li>
								<img src="images/${pagas.src}" alt="" />
								<p>
									<span>限时折扣</span><span class="spanName">飞天茅台53度<br />
									500ml*2送手提袋 2018-2019</span><br />
									商城价：<i>￥${pagas.price}</i>
								</p>
							</li>`
				}
				$(this).html(tit)
			})
		var $zeroList = $(".zeroF-con ol li") ;
		var $zeroLists = $(".zeroF-con ul");
		$zeroList.bind({
			mouseover:function  () {
				var index = $(this).index();
				$(this).find("div").show().end().siblings().find("div").hide();
				$(this).find("a").addClass("a1").end().siblings().find("a").removeClass("a1");
				$(".zeroF-con ul").not($zeroLists.eq(index)).hide();
				$zeroLists.eq(index).show();
			}	
		})
	})
}
//zeroF-top






