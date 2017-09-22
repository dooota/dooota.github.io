class Miscellaneous {
	constructor(data) {
		this.gold = []
		this.score = 0
		this.scoreMark = 5
		this.p = data.aImg.integrate
	}

	draw(g) {
		g.drawImage(this.p,454,353,31,34,5,5,30,30)
		g.font = "30px utf-8";
		g.fillStyle = "black";
		g.fillText(this.score,45,32)
	}

	//本机子弹与敌机碰撞
	BullandEnemy(obj1,obj2) {
		if(obj1.length > 0) {
			var o = []
			for(let i = 0; i < obj1.length; i++) {

				for(let j = 0; j < obj2.length; j++) {

					if( detection(obj1[i],obj2[j]) ) {
						var d = {}
						d.l = obj2[j].l + 30
						d.t = obj2[j].t + 30
						d.w = 30
						d.h = 30
						this.gold.push(d)

						obj1.splice(i,1)
						obj2.splice(j,1)
						break
					}
				}
			}
		}
	}

	//本机与敌机碰撞
	PlayandEnemy(obj1,obj2) {
		for(let i = 0; i < obj2.length; i++) {
			var o = detection(obj1,obj2[i])
			if(o) return o
		}
	}

	//本机与金币碰撞
	PlayandGold(obj1,obj2) {
		for(let i = 0; i < obj2.length; i++) {
			var o = detection(obj1,obj2[i])
			if(o) {
				obj2.splice(i,1)
				this.score++
				i--
			}
		}
	}

	//难度设置  飞行距离越远.刷新的敌人数量的冷却越多
	diffset(enemy,bg) {
		if( bg.mData.m == bg.mData.diffmark ) {
			enemy.maxcool --
			bg.mData.diffmark += 5
		}
		if( enemy.maxcool < 1 ) {
			enemy.maxcool = 1
		}
	}

	//难度设置  金币拾取越多子弹冷却越少
	goldset(bull) {
		if(this.score == this.scoreMark) {
			bull.maxcool--
			this.scoreMark += 5
			if( bull.maxcool < 1 ) {
				bull.maxcool = 1
			}
		}
	}
}
