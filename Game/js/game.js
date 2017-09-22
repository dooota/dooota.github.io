class Game{
	constructor(...obj) {
		//生成绘图环境
		this.c = document.getElementById('canvas')
		this.ctx = this.c.getContext('2d')

		//引入图片
		this.loadimg = obj[1].loadimg
		this.endimg = obj[1].ohterimg

		//引入数据
		this.Play = obj[0]
		this.Bg = obj[1]
		this.Bull = obj[2]
		this.Enemy = obj[3]
		this.Gold = obj[4]
		this.Other = obj[5]

		this.start = null
		this.ingame = null
		this.ends = null
		this.keydown = {}

		this.loadgame()
		this.setkey()
	}

	draw() {
		this.ingame = setInterval( () => {
			//难度设置
			this.Other.diffset(this.Enemy,this.Bg) //飞行距离越远 敌机刷新越快
			this.Other.goldset(this.Bull) 				 //金币数越多子弹冷却越快
			
			//更新游戏画面
			this.Gold.updata(this.Other.gold)
			this.Bg.updata()
			this.Play.updata(this.keydown)
			this.Bull.updata(this.keydown,this.Play)
			this.Enemy.updata()

			//载入游戏画面
			this.Bg.draw(this)
			this.Other.draw(this.ctx)
			this.Play.draw(this.ctx)
			this.Bull.draw(this.ctx)
			this.Enemy.draw(this.ctx)
			this.Gold.draw(this.ctx,this.Other.gold)

			//碰撞检测
			this.Other.BullandEnemy(this.Bull.num,this.Enemy.num)
			this.Other.PlayandEnemy(this.Play,this.Enemy.num) && this.endgame()
			this.Other.PlayandGold(this.Play,this.Other.gold)

		},1000/60)
	}

//设置按键
	setkey() {
		document.onkeydown = ev => {
			this.keydown[ev.key] = true
		}
		document.onkeyup = ev => {
			this.keydown[ev.key] = false
		}
	}

//加载页
	loadgame() {
		this.ctx.drawImage(this.loadimg,0,0,400,600)
		this.ctx.font = "10px utf-8";
		this.ctx.fillStyle = "#bedaf2";
		this.ctx.fillText('按K开始游戏',162,500)
		this.startgame()
	}

//启动游戏
	startgame() {
		this.start = setInterval( () => {
			if( this.keydown['k'] ) {
				clearInterval(this.start)
				this.draw()
			}
		},16)
	}

//结束游戏
	endgame() {

		clearInterval(this.ingame)

		this.ctx.drawImage(this.endimg,268,4,256,76,72,186,256,76)
		this.ctx.font = "30px utf-8";
		this.ctx.fillStyle = "#104f60";
		this.ctx.fillText('按R重新开始游戏',85,400)

		this.ends = setInterval( () => {
			if(this.keydown['r']) {
				clearInterval(this.ends)
				location.reload()

			}
		},16)
	}
}
