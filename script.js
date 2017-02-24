/* 
* @Author: ananayarora
* @Date:   2016-01-06 00:25:31
* @Last Modified by:   ananayarora
* @Last Modified time: 2016-01-07 02:50:40
*/

$(document).ready(function(){
	$(".art").click(function(){
		var link = $(this).attr('khol');
		$(".main_image_art").prop('src',link);
		$(".main_overlay").show().animate({
			'opacity':1
		});
		$(".main_image_art").show().animate({
			'opacity':1
		});
		$(".fa-times").show().animate({
			'opacity':1
		});
	});
	$(".main_overlay").click(function(){
		$(".main_image_art").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_overlay").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".fa-times").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
	});
	$(".fa-times").click(function(){
		$(".main_image_art").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_overlay").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_image_art_app").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".app_image").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".app_desc").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".app_title").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".box").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_overlay_app").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".fa-times").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
	});
	$(".main_overlay_app").click(function(){
		$(".main_image_art").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_overlay").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_image_art_app").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".app_image").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".app_desc").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".app_title").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".box").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".main_overlay_app").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
		$(".fa-times").animate({
			'opacity':0
		}, function(){
			$(this).hide();
		});
	});
	$(".app_art").click(function(){
		var link = $(this).attr('khol');
		var apptitle = $(this).attr('apptitle');
		var appdesc = $(this).attr('appdesc');
		var appimage = $(this).attr('appimage');
		$(".main_image_art_app").prop('src',link);
		$(".app_image").prop('src',appimage);
		$(".app_desc").html(appdesc);
		$(".app_title").html(apptitle);
		$(".main_image_art").prop('src',link);
		$(".main_overlay_app").show().animate({
			'opacity':1
		});
		$(".main_image_art_app").show().animate({
			'opacity':1
		});
		$(".app_image").show().animate({
			'opacity':1
		});
		$(".app_desc").show().animate({
			'opacity':1
		});
		$(".app_title").show().animate({
			'opacity':1
		});
		$(".box").show().animate({
			'opacity':1
		});
		$(".fa-times").show().animate({
			'opacity':1
		});
	});
});