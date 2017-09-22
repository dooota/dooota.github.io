class DrawGold{
	constructor(data) {
		//获取图片资源
		this.p = data.aImg.integrate

		this.speed = data.golddata.speed     //金币飞行速度
		this.num = data.golddata.num       //填充金币数据 [ [],[], ]
		this.type = data.golddata.type     //金币的图片坐标
		this.mark = data.golddata.mark
	}

	//绘制金币
	draw(g, data) {
		for(let i = 0; i<data.length; i++) {
			g.drawImage(
							this.p,
							this.type[0],
							this.type[1],
							this.type[2],
							this.type[3],
							data[i].l,
							data[i].t,
							data[i].w,
							data[i].h)
		}
	}

	//更新金币
	updata(data) {
		this.goldmove(data)
	}

	//填入金币数据
	pushGold(data) {
	}

	//金币的移动
	goldmove(data) {
		for(let i = 0; i<data.length; i++) {
			data[i].t += this.speed
			if( data[i].t > 600) {
				data.splice(i,1)
			}
		}
	}
}
