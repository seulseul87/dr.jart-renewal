function list01(){
	$('.list02 .main_text, .list02 .go_bt').fadeOut(800);
	$('.list02 .product').delay(500).animate({'bottom':'-800px'}, 700);
	$('.list01 .main_text').delay(600).fadeIn(1200);
	$('.list01 .go_bt').delay(800).fadeIn(1200);
	$('.list01 .product').delay(800).animate({'bottom':'50px'}, 700);
	

}



function list02(){
	$('.list01 .main_text, .list01 .go_bt').fadeOut(800);
	$('.list01 .product').delay(500).animate({'bottom':'-800px'}, 700);
	$('.list02 .main_text').delay(600).fadeIn(1200);
	$('.list02 .go_bt').delay(800).fadeIn(1200);
	$('.list02 .product').delay(800).animate({'bottom':'50px'}, 700);

}
function starList(){


	if($('.slidesjs-pagination li').eq(0).find('a').hasClass('active')){
		list01();
	}

	if($('.slidesjs-pagination li').eq(1).find('a').hasClass('active')){
		list02();
	}	
	
};


















function popHeight(){
	var popH = $('body').innerHeight();
	$('.pop_box .inner_pop').css({'height':popH-250});

}


$(window).ready(popHeight);
$(window).resize(popHeight);




$(document).ready(function() {


});

