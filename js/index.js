class G2S {
	constructor() {
		// 合作伙伴页面数据
		this.partnersTime = null
		this.partnersNum = 0

		// testimonials文本数据
		this.testimonialsNum = 0

		// 每块主内容的top和height数据
		this.pagedata = {}

		// 每块展示图片的top和height数据
		this.showimgdata = {
			'.section_img': {},
			'.testimonials': {},
			'.second': {},
		}

		// 窗口大小
		this.w = $(window).width()
		this.h = $(window).height()

		this.SetData()
	}

	//配置数据
	SetData() {
		this.Resize()
		this.SetScrollForNav()
		// this.Scroll()

		this.GetPic()
		this.Partners()
		this.Testimonials()
		this.SetCover()
		this.GetPageData()
		this.GetShowImgData()
	}

	//改变窗口大小事件
	Resize() {
		$(window).resize( () => {
			$('.btn_menu').hide()
			this.w = $(window).width()
			this.h = $(window).height()

			this.Partners()
			this.Testimonials()
			this.SetCover()
			this.GetPageData()
			this.GetShowImgData()
		})
	}

	// 滚动条事件
	// Scroll() {
	// 	if( !this.IsPC() ) {
	// 		$('.cover').css({
	// 			'backgroundPositionY': -100,
	// 			'background-size': '310%',
	// 		})
	// 		$('.section_img').css('backgroundPositionY',0)
	// 		$('.testimonials').css('backgroundPositionY',0)
	// 		$('.second').css('backgroundPositionY',0)
	// 	}
	// 	else {
	// 		let imgdata = this.showimgdata
	// 		let w = this.w
	// 		let h = this.h
	//
	// 		$(document).on('scroll',function() {
	// 			let scrollT = $(this).scrollTop()
	// 			let totalTop = h + scrollT
	// 			// // 封面图片
	// 			if( scrollT => 0 &&  scrollT < h ) {
	// 				$('.cover').css('backgroundPositionY',scrollT - 100)
	// 			}
	//
	// 			// // 内容区的展示图片滑动
	// 			for(let attr in imgdata) {
	// 				if( totalTop >  imgdata[attr]['t'] && scrollT < imgdata[attr]['h'] - 60 ) {
	// 					let T =  scrollT  - imgdata[attr]['t']
	// 					if( attr == '.second') {
	// 						 T += 100
	// 					}
	// 					$(attr).css('backgroundPositionY', T/2)
	// 					// console.log($(attr).css('backgroundPosition'));
	// 				}
	// 			}
	// 		})
	// 	}
	// }

	//滚动时导航样式
	SetScrollForNav() {
		let pagedata = this.pagedata
		$(document).on('scroll',function() {
			let scrollT = $(this).scrollTop()

			// 导航和封面按钮
			if( scrollT > 5 ) {
				$('#nav').fadeIn()
				$('.start').fadeOut()
			}
			else {
				$('#nav').fadeOut()
				$('.start').fadeIn()
			}

			for(let attr in pagedata) {
				if( scrollT > pagedata[attr]['t'] && scrollT < pagedata[attr]['h']) {
					$('.nav_menu a').removeClass('active')
					$('.btn_menu a').removeClass('actives')
					$('.nav_menu a').filter('[data-title='+ attr +']').addClass('active')
					$('.btn_menu a').filter('[data-title='+ attr +']').addClass('actives')
					break
				}
				else {
					$('.nav_menu a').removeClass('active')
					$('.btn_menu a').removeClass('actives')
				}
			}
		})
	}

	// 判断是否PC端
	IsPC() {
		var userAgentInfo = navigator.userAgent
		var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"]
		var flag = true
		for (var i = 0; i < Agents.length; i++) {
			if (userAgentInfo.indexOf(Agents[i]) > 0) {
			flag = false
			break
			}
		}
		return flag
	}

	// 合作伙伴页面的生成
	GetPic() {
		for(let i = 0; i < 4 ; i++){
			let ul = $('<ul>')
			for (let j = 1; j < 13; j++) {
				let li = $('<li>')
				if( j > 9 ) {
					li.css('backgroundImage','url(img/logo-' + j + '.jpg)')
				}
				else {
					li.css('backgroundImage','url(img/logo-0' + j + '.jpg)')
				}
				ul.append( li )
			}
			$('.partners').append( ul )
		}
	}

	//合作伙伴图片轮播和设置位置
	Partners() {
		clearInterval( this.partnersTime )
		let left = $('.partners>ul>li').outerWidth(true)
		$('.partners>ul>li').stop(true, true)

		$('.partners>ul').each( function(i) {
			$(this).css('top', i * left )
			$(this).children('li').each( function(j) {
				$(this).css('left', j * left )
			})
		})

		this.partnersNum = -1
		this.partnersTime = setInterval( () => {
			this.partnersNum++
			if( this.partnersNum > 11) { this.partnersNum = 0 }
			let num = this.partnersNum
			$('.partners>ul>li').animate({'left': '-=' + left }, 800, () =>{
				$('.partners>ul').each( function() {
					$(this).children().eq(num).css('left', 11 * left)
				})
			})
		},4000)
	}

	//testimonials文本设置
	Testimonials() {
		$('.testimonials_text>p').each(function(i) {
			$(this).css('left', i * $(this).width() )
		})
		$('.testimonials_text>p').css('transition','.5s' )
		this.testimonialsNum = 0
	}

	//设置封面大小
	SetCover() {
		let w = $(window).width()
		let h = $(window).height()

		$('.cover').css({
			'width' : w ,
			'height' : h ,
		})
	}

	//获取主内容块数据
	GetPageData() {
		let data = this.pagedata
		$('#section').children('[id]').each(function(i) {
			let id = $(this).attr('id')
			data[id] = {}
			data[id]['t'] = parseInt( $(this).offset().top ) - 61
			data[id]['h'] = parseInt( $(this).offset().top + $(this).outerHeight(true) ) - 61
		})
		this.pagedata = data
	}

	//获取展示图片数据
	GetShowImgData() {
		let data = this.showimgdata
		for(let attr in data) {
			data[attr]['t'] = parseInt( $(attr).offset().top )
			data[attr]['h'] = parseInt( data[attr]['t'] + $(attr).innerHeight() )
		}
		this.showimgdata = data
	}
}

$(function() {
	var G2s = new G2S()

	//hover事件
	$('.nav_menu>li').hover(
		function() {
			let l = $(this).offset().left
			let w = $(this).width()

			$('.line').css({
				'left' : l ,
				'width' : w
			})
		},
		function() {
			$('.line').css('width',0)
		}
	)

	$('.start').hover(
		function() {
			$('.start .fa-angle-down').show()
			$('.start div').css('color','#d51975')
		},
		function() {
			$('.start .fa-angle-down').hide()
			$('.start div').css('color','white')
		}
	)

	$('.work_pic>a').hover(
		function() {
			var img = $(this).children('img')
			var div = $(this).children('div')

			img.css( 'top', -div.innerHeight() )
			div.fadeIn(500)
		},
		function() {
			var img = $(this).children('img')
			var div = $(this).children('div')

			img.css('top', 0 )
			div.fadeOut(500)
		}
	)

	$('.work_menu>ul button').hover(
		function() {
			if( !($(this).attr('class') == 'work_active') ) {
				$(this).addClass('work_hover')
			}
		},
		function() {
			if( !($(this).attr('class') == 'work_active') ) {
				$(this).removeClass('work_hover')
			}
		}
	)

	$('.download_text>button').hover(
		function() {
			$(this).css('backgroundColor','rgb(35,35,35)')
		},
		function() {
			$(this).css('backgroundColor','#f91585')
		}
	)

	$('.team_pic>div').hover(
		function() {
			$(this).children('img').css('top','-10%')
			$(this).children('div').css({
				'bottom': 0,
				'background': '#333',
				'border-color': '#333',
			})
			$(this).children('div').children('h2').css('color','#fff')
		},
		function() {
			$(this).children('img').css('top',0)
			$(this).children('div').css({
				'bottom': '-55%',
				'background': '#fff',
				'border-color': '#fff',
			})
			$(this).children('div').children('h2').css('color','#000')
		}
	)

	$('.testimonials_btn button').hover(
		function() {
			$(this).css('borderColor','#f91585')
			$(this).children('i').css('color','#fff')
		},
		function() {
			$(this).css('borderColor','#fff')
			$(this).children('i').css('color','#999')
		}
	)

	$('.join_text_2 a').hover(
		function() {
			$(this).css({
				'margin-left': 10 ,
				'color': '#d51975',
			})
		},
		function() {
			$(this).css({
				'margin-left': 0 ,
				'color': '#888',
			})
		}
	)

	//点击事件
	$('.nav_menu a').click(function() {
		let str = '#' + $(this).attr('data-title')
		let t = $(str).offset().top - 60
		$('body').animate({'scrollTop': t},500)
	})

	$('.btn_menu a').click(function() {
		$('.btn_menu').hide()
		let str = '#' + $(this).attr('data-title')
		let t =$(str).offset().top - 60
		$('body').animate({'scrollTop': t},500)
	})

	$('.nav_btn').click(function() {
		$('.btn_menu').toggle()
	})

	$('.start').click(function() {
		let t = $('#about').offset().top - 60
		$('body').animate({'scrollTop': t},500)
	})

	$('.work_menu>ul button').click(function() {
		$('.work_menu button').removeClass('work_active')
		$(this).removeClass('work_hover')
		$(this).addClass('work_active')
	})

	$('.work_menu_sm').click(function() {
		$(this).children('ul').toggle()
	})

	$('.work_menu_sm>ul>li').click(function() {
		$('.work_menu_sm>ul>li').removeClass('active')
		$(this).addClass('active')
	})

	$('.btn_r').click(function() {
		let l = $('.testimonials_text>p').width()
		let length = $('.testimonials_text>p').length;

		G2s.testimonialsNum++

		if( G2s.testimonialsNum ==  length) {
			G2s.Testimonials()
			G2s.testimonialsNum = 0
		}
		else {
			$('.testimonials_text>p').css('left', '-=' + l)
		}
	})

	$('.btn_l').click(function() {
		let l = $('.testimonials_text>p').width()
		let length = $('.testimonials_text>p').length;

		G2s.testimonialsNum--

		if( G2s.testimonialsNum <  0) {
			G2s.testimonialsNum = length - 1
			$('.testimonials_text>p').css('left', '-=' + l * 6 )
		}
		else {
			$('.testimonials_text>p').css('left', '+=' + l)
		}
	})

})
