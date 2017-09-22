class DrawEnemy{
	constructor(data) {
		//获取图片资源
		this.p = data.aImg.integrate

		//设置敌机的数据
		this.t = data.enemydata.t
		this.l = data.enemydata.l
		this.w = data.enemydata.w
		this.h = data.enemydata.h

		this.speed = data.enemydata.speed     //敌机飞行速度
		this.num = data.enemydata.num       //填充敌机数据
		this.type1 = data.enemydata.type1     //敌机1的图片坐标
		this.type2 = data.enemydata.type2    //敌机2的图片坐标
		this.cool = data.enemydata.cool      //敌机刷新冷却
		this.maxcool = data.enemydata.maxcool   //敌机刷新最大冷却
	}

	//绘制敌机
	draw(g) {
		for(let i = 0;i<this.num.length;i++) {
			g.drawImage(this.p,
							this.num[i].type[0],
							this.num[i].type[1],
							this.num[i].type[2],
							this.num[i].type[3],
							this.num[i].l,
							this.num[i].t,
							this.w,this.h)
		}
	}

	//更新敌机
	updata() {
		this.pushenemy()
		this.enemymove()
	}

	//填入敌机数据
	pushenemy() {
		if(this.cool == this.maxcool) {
			var e = {}
			getrandom(1,2) == 1 ? e.type = this.type1 : e.type = this.type2

			e.l = getrandom(0,320)
			e.t = this.t
			e.w = this.w
			e.h = this.h

			this.num.push(e)
			this.cool = 0
		}

		this.cool++
		if( this.cool > this.maxcool ) {
			this.cool = 0
		}
	}

	//敌机的移动
	enemymove() {
		if(this.num.length > 0) {
			for(let i = 0;i<this.num.length;i++) {
				this.num[i].t += this.speed

				if( this.num[i].t > 600 ) {
					this.num.splice(i,1)
				}
			}
		}
	}
}
