class DrawBg {
	constructor(data) {
		//获取图片资源
		this.bg = data.aImg.bg
		this.ohterimg = data.aImg.integrate
		this.loadimg = data.aImg.loadimg

		//设置数据
		this.x1 = data.bgdata.x1
		this.y1 =data.bgdata.y1
		this.x2 =data.bgdata.x2
		this.y2= data.bgdata.y2
		this.w = data.bgdata.w
		this.h = data.bgdata.h

		this.mData = data.bgdata.mData

		this.textdata = data.bgdata.textdata
	}

	//绘制背景
	draw(g) {
		g.c.height = g.c.height //重置画布.百度出来的.
		g.ctx.drawImage(this.bg,this.x1,this.y1,this.w,this.h)
		g.ctx.drawImage(this.bg,this.x2,this.y2,this.w,this.h)
		g.ctx.font = "30px utf-8";
		g.ctx.fillStyle = "black";
		g.ctx.fillText(this.mData.m + 'M',this.textdata.textleft,32)
	}

	//更新背景
	updata() {
		this.rollbg()
	}

	//背景滚动
	rollbg() {

		if(this.y1 == -this.h) {
			this.y1 = this.h
		}
		if(this.y2 == -this.h) {
			this.y2 = this.h
		}

		this.y1--
		this.y2--

		//飞行距离的控制
		this.mData.mspeed++
		if(this.mData.mspeed == 50) {
			this.mData.m++
			this.mData.mspeed = 0
		}

		//飞行距离文字的距离控制
		if( this.mData.m == this.textdata.textmark) {
			this.textdata.textleft -= 20
			this.textdata.textmark *= 10
		}
	}
}
