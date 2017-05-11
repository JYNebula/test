// JavaScript Document
/*! layer demo */
;!function(){

	var gather = {
	  htdy: $('html, body')
	};
	
	//全局配置
	layer.config({
	  extend: [
		'extend/layer.ext.js' 
		,'skin/moon/style.css'
	  ]
	  ,skin: 'layer-purple'
	});
}();

$(document).ready(function () {
	$(window).resize(function(){
		$(".wrapper").css("min-height",$(window).height() +"px");
		$(".loginWrapper").css("min-height",$(window).height() +"px");
	}).resize();
	
	$('.navbar-minimalize').on('click', function(event){
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
    });
    
    jQuery(".bullhornMarquee").slide({mainCell:"ul",autoPlay:true,effect:"topMarquee",vis:1,interTime:50});
    
    $(function(){
		$('.companyName').on("click",function(){
			var $popoverbox = $(this).next();
			if(!$popoverbox.is(':visible')){
				$('.companyPopover:visible').hide();
			}
			$popoverbox.toggle();
		}).siblings('.companyPopover').hide();
		$('.companyPopover .icon-angle-left ').on("click",function(){
			$(this).parent().hide()
		});
	});
	
    $(".card-group li").click(function(){
		$(this).addClass('checked').siblings().removeClass('checked');
	});
	$('.dialogBox .card-second').on('show.bs.collapse', function () {
        $('.dialogBox .card-second.in').collapse('hide');
    });
	$('.card-group li:first').addClass('checked');
	$('.card-group li:first .tit').removeClass('collapsed');
	$('.card-group li:first .card-second').addClass('in');
	
	$('.file-pretty input[type="file"]').prettyFile();
	
	jQuery(".tabBox").slide({ titCell:".tabHead li", mainCell:".tabContent",trigger:"click"});
});
