$(function(){
	var $list = $(".con ul li");
		$cons = $(".con .con2");
	$list.mouseover(function(){
		$(this).addClass("cons1")
			   .siblings()
			   .removeClass("cons1");
		var index = $(this).index();
		$cons.eq(index)
			.addClass("son")
			.siblings()
			.removeClass("son");
	})
})
