window.onload = function (){
	var oUl = document.querySelector('.nav_head');
	var aLi = document.querySelectorAll('.nav_head>li');
	var oLine = document.querySelector('.line');
	var oText = document.querySelector('#text');
	var oNav = document.querySelector('.nav');
	var oSet = document.querySelector('.set');
	var oUp = document.querySelector('.up');
	var oPmenu = document.querySelector('.product_menu');
	var oSmenu = document.querySelector('.sdk_menu');
	var oPmenu_A = document.querySelectorAll('.product_menu>li>a');
	var oPmenu_S = document.querySelectorAll('.product_menu>li>a>span');
	var oSmenu_A = document.querySelectorAll('.sdk_menu>li>a');
	var oSmenu_S = document.querySelectorAll('.sdk_menu>li>a>span');
	
	oText.focus();
	
	for(var i = 3;i < aLi.length; i++){
		aLi[i].onmousemove = function (){
			showline(this);
		}
		aLi[i].onmouseout = function (){
			oLine.style.display = 'none';
		}
	}
	
	aLi[1].onmousemove = function (){
		oPmenu.style.display = 'block';
		showline(this);
	}
	
	aLi[1].onmouseout = function (){
		oPmenu.style.display = 'none';
		oLine.style.display = 'none';
	}
	
	aLi[2].onmousemove = function (){
		oSmenu.style.display = 'block';
		showline(this);
	}
	
	aLi[2].onmouseout = function (){
		oSmenu.style.display = 'none';
		oLine.style.display = 'none';
	}
	
	for(var i = 0;i < oPmenu_A.length; i++){
		oPmenu_A[i].index = i;
		oPmenu_A[i].onmousemove = function (){
			this.style.background = '#f5f5f5';
			oPmenu_S[this.index].style.color = '#1b8afa';
		}
		oPmenu_A[i].onmouseout = function (){
			this.style.background = '#fff';
			oPmenu_S[this.index].style.color = '#000';
		}
	}
	
	for(var i = 0;i < oSmenu_A.length; i++){
		oSmenu_A[i].index = i;
		oSmenu_A[i].onmousemove = function (){
			this.style.background = '#f5f5f5';
			oSmenu_S[this.index].style.color = '#1b8afa';
		}
		oSmenu_A[i].onmouseout = function (){
			this.style.background = '#fff';
			oSmenu_S[this.index].style.color = '#000';
		}
	}
	
	
	oLine.onmousemove = function (){
		this.style.display = 'block';
		var l = this.offsetLeft;
		if( l == 190 ){
			oPmenu.style.display = 'block';
		}
		if( l == 306 ){
			oSmenu.style.display = 'block';
		}
	}
	
	oSet.onmousemove = function (){
		this.className = 'set setandup';
		oSet.innerHTML = '提交工单';
	}
	oSet.onmouseout = function (){
		this.className = 'set';
		this.innerHTML = '';
	}
	oUp.onmousemove = function (){
		this.className = 'up setandup';
		this.innerHTML = '回到顶部';
	}
	oUp.onmouseout = function (){
		this.className = 'up';
		this.innerHTML = '';
	}
	
	window.onscroll = function () {
		var t = document.documentElement.scrollTop || document.body.scrollTop; 
		oLine.style.top = 42 + t + 'px';
		
		if( t > 50 ){
			oNav.style.background = '#1B8AFA';
		}
		else{
			oNav.style.background = 'rgba(0,0,0,0.05)';
		}
		if( t > 100){
			oUp.style.display = 'block';
		}
		else{
			oUp.style.display = 'none';
		}
	}
	
	function showline (obj){
		var w = obj.offsetWidth;
		var l = obj.offsetLeft;
		
		oLine.style.width = w + 'px';
		oLine.style.left = l + 'px';
		oLine.style.display = 'block';
	}
}














