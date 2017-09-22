class DrawPlay{
	constructor(data) {
		//获取图片资源
		this.p = data.aImg.integrate

		this.l = data.playdata.l	//本机的left值
		this.t = data.playdata.t	//本机的top值
		this.w = data.playdata.w  //本机的宽度
		this.h = data.playdata.h	//本机的高度
		this.speed = data.playdata.speed  //本机的移速
	}

	//绘制本机
	draw(g) {
		g.drawImage(this.p,276,250,177,143,this.l,this.t,this.w,this.h)
	}

	//更新本机
	updata(key) {
		this.move(key)
	}

	//本机的按键映射
	move(key) {
		if( key['a'] ) {
			this.l -= this.speed
			if(this.l < 0){
				this.l = 0
			}
		}
		if( key['d'] ) {
			this.l += this.speed
			if(this.l > 280){
				this.l = 280
			}
		}
		if( key['w'] ) {
			this.t -= this.speed
			if(this.t < 0) {
				this.t = 0
			}
		}
		if( key['s'] ) {
			this.t += this.speed
			if(this.t > 500){
				this.t = 500
			}
		}
	}
}
