class DrawBull{
	constructor(data) {
		//获取图片资源
		this.p = data.aImg.integrate

		//设置子弹的数据
		this.l = data.bulldata.l
		this.t =data.bulldata.t
		this.w = data.bulldata.w
		this.h = data.bulldata.h

		this.num = data.bulldata.num //填充子弹数据
		this.speed =data.bulldata.speed //子弹发射速度
		this.cool = data.bulldata.cool  //子弹冷却时间
		this.maxcool = data.bulldata.maxcool //子弹最大冷却时间
	}

	//绘制子弹
	draw(g) {
		for(let i = 0;i<this.num.length;i++) {
			g.drawImage(this.p,
							540,320,91,78,
							this.num[i].l,
							this.num[i].t,
							this.w,
							this.h)
		}
	}

	//更新子弹数据
	updata(key,play) {
		this.pushbull(key,play)
		this.bullmove()
	}

	//填充子弹数据
	pushbull(key,play) {
		if(key[' '] && this.cool == this.maxcool) {
			var b = {}
			b.l = (play.l + (play.w - this.w)/2 )
			b.t = play.t
			b.w = this.w
			b.h = this.h
			this.num.push( b )
			this.cool = 0
		}
	}

	//子弹的移动
	bullmove() {
		if(this.num.length > 0) {
			for(let i = 0;i<this.num.length;i++) {
				this.num[i].t -= this.speed
				if( this.num[i].t < -this.h ) {
					this.num.splice(i,1)
				}
			}
		}
		this.cool++
		if(this.cool > this.maxcool) {
			this.cool = this.maxcool
		}
	}
}
