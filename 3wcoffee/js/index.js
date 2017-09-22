$(function(){
	
	//导航栏动画 
	$('.nav_other').parent().prevAll().on({
		'mouseenter' : function(){
			var that = $(this).children('a');
			that.append( $('.myline') );
			var W = that.width();
			$('.myline').css('width',W).show();
		},
		'mouseleave' : function(){
			$('.myline').hide();
		}
	});
	//关于3W的移入页面
	var timer = null;
	$('.nav_3w').on({
		'mouseenter': function(){
			clearTimeout(timer);
			var W = $(document).width();
			var L = $(this).offset().left;
			var oLeft = W*0.28;
			$('.nav_3w_carousel').show();
			$('.nav_3w_carousel').css({'width': W,'left' : -L});
			$('.nav_3w_pic').css('left',oLeft);
			$('.nav_3w_text').css('left',oLeft+5);
			$('.nav_3w_pic').animate({'top' : 45},150);
			$('.nav_3w_text').animate({'bottom':40},150);
		},
		'mouseleave' : function(){
			$('.nav_3w_carousel').hide();
			timer = setTimeout(function(){
				$('.nav_3w_pic').css('top',0);
				$('.nav_3w_text').css('bottom',0);
			},100);
		}
	});
	//轮播图 
	$('#myCarousel').on({
		'mouseenter' : function(){
			var btn1 = $('#myCarousel>.row>a:eq(0)');
			var btn2 = $('#myCarousel>.row>a:eq(1)');
			btn1.show().animate({'textIndent' : 0},150);
			btn2.show().animate({'textIndent' : 40},150);
		},
		'mouseleave' : function(){
			var btn1 = $('#myCarousel>.row>a:eq(0)');
			var btn2 = $('#myCarousel>.row>a:eq(1)');
			btn1.hide().css('textIndent',40);
			btn2.hide().css('textIndent',0);
		}
	});
	//回到顶部
	$(document).scroll(function(){
		var T = $(document).scrollTop();
		if( T > 400 ){
			$('.fixed_icon_3').removeClass('hide')
		}
		else{
			$('.fixed_icon_3').addClass('hide');
		}
	});
	//fixed
	$('.fixed_icon_1').attr('num',1);
	fixed( $('.fixed_icon_1'),$('.fixed_icon_1_con') );
	fixed( $('.fixed_icon_2'),$('.fixed_icon_2_con') );
	
	function fixed(obj,obj1){
		obj.attr('timer',null);
		obj.on({
			'mouseenter' : function (){
				if( obj.attr('num') == 1 ){
					$('.fixed_icon_2_con').hide();
				}
				else{
					$('.fixed_icon_1_con').hide();
				}
				
				clearTimeout( obj.attr('timer') );
				obj1.fadeIn(100);
			},
			'mouseleave' : function (){
				obj.attr('timer',setTimeout(function(){
					obj1.fadeOut(100);
				},150)
				);
				
			}
		});
		obj1.on({
			'mouseenter' : function (){
				clearTimeout( obj.attr('timer') );
			},
			'mouseleave' : function (){
				obj.attr('timer',setTimeout(function(){
					obj1.fadeOut(100);
				},150)
				);
			}
		});
	}
	
	//3w空间
		//网页内容图片
	$('.maincontent_list .content_space>div').each(function(i,j){
		$(this).css('backgroundImage','url(img/city'+ (i+1) +'.png)');
		$(this).children('div').css('backgroundImage','url(img/bg.gif)');
	});
	
	$('.maincontent_list .content_space>div').on('mouseenter',function(){
		$(this).children('div').css('opacity',.8);
		$(this).children('div').css('transform','scale(1)');
	});
	$('.maincontent_list .content_space>div').on('mouseleave',function(){
		$(this).children('div').css('opacity',0);
		$(this).children('div').css('transform','scale(.1)');
	});
	
	//3w服务商
	$('.content_service>a').each(function(i){
		
		$(this).css('left',107+i%5*242);
		if( i >= 5 ){
			$(this).css('top',196);
		}
		var T = $(this).position().top;
		$(this).attr('indextop',T);
	});
//	$('.content_service>a').on({
//		'mouseenter' : function(){
//			$(this).css({
//				'height': 190,
//				'top' : $(this).attr('indextop')-4,
//				'borderBottom' : '3px solid #d4d5dd'
//			});
//		},
//		'mouseleave' : function(){
//			$(this).css({
//				'height': 186,
//				'top' : $(this).attr('indextop')- 0,
//				'borderBottom' : '1px solid #eef1f5'
//			});
//		}
//	});
	$('.content_service>a').hover(
		function(){
			$(this).css({
				'height': 190,
				'top' : $(this).attr('indextop')-4,
				'borderBottom' : '3px solid #d4d5dd'
			});
		},
		function(){
			$(this).css({
				'height': 186,
				'top' : $(this).attr('indextop')- 0,
				'borderBottom' : '1px solid #eef1f5'
			});
		}
	);
	
	
	//3w活动
	$('.content_activity>a').each(function(i){
		$(this).css('backgroundPosition','0 '+(i*-147)+'px');
	})
	$('.content_activity>a').on({
		'mouseenter' : function (){
			$(this).children('div').css('background','rgba(0, 0, 0, 0.4)');
			var index = $(this).index();
			var S = $('<style></style>');
			var str = '.content_activity>a:nth-child('+(index+1)+')>div:after{top:0}';
			str += '.content_activity>a:nth-child('+(index+1)+')>div:before{top:0}';
			str += '.content_activity>a:nth-child('+(index+1)+'):after{left:0}';
			str += '.content_activity>a:nth-child('+(index+1)+'):before{left:0}';
			S.html(str);
			$('head').append(S);
		},
		'mouseleave' : function (){
			$(this).children('div').css('background','rgba(0, 0, 0, 0)');
			var index = $(this).index();
			var S = $('<style></style>');
			var str = '.content_activity>a:nth-child('+(index+1)+')>div:after{top:142px}';
			str += '.content_activity>a:nth-child('+(index+1)+')>div:before{top:-142px}';
			str += '.content_activity>a:nth-child('+(index+1)+'):after{left:-385px}';
			str += '.content_activity>a:nth-child('+(index+1)+'):before{left:385px}';
			S.html(str);
			$('head').append(S);
		}
	});
	
	//3w入驻企业
//	$('.content_enterprise>a').on({
//		'mouseenter' : function (){
//			$(this).animate({
//				'transform' : 'translateX(-110px)',
//				'transform' : 'rotate(-10deg)'
//			},100);
//		},
//		'mouseleave' : function (){
//			
//		}
//	});
});
