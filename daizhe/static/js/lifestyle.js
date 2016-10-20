$(function(){
// 搜索框获取焦点时的效果
	$('#js_searchBox').click(function(){
		$('#search').focus();
		$('#search').addClass('focus');
		$('.note').css({'display':'none'});
	});
	$('#search').blur(function(){
		$(this).removeClass('focus');
		$('.note').css({'display':'block'});
	});
	$('.go-top li:first').click(function(){
		$('html,body').stop().animate({
			scrollTop:0
		},800);
	});
})