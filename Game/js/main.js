window.onload = function() {
	var gamedata = new GameData(dataBack)
}

//图片加载完成后执行
function dataBack(data) {
		var Bg = new DrawBg(data)
		var Play = new DrawPlay(data)
		var Bull = new DrawBull(data)
		var Enemy = new DrawEnemy(data)
		var Gold = new DrawGold(data)
		var Other = new Miscellaneous(data)
		var game = new Game(Play,Bg,Bull,Enemy,Gold,Other)
}

//随机数获取
function getrandom(min,max) {
	if(min == 1) {
		return Math.ceil( Math.random()*max)
	}
	else {
		return Math.round( Math.random()*max)
	}
}

//碰撞检测
function detection(obj1,obj2) {
		var num = 25

		let l1 = obj1.l
		let r1 = l1 + obj1.w
		let t1 = obj1.t
		let b1 = t1 + obj1.h

		let l2 = obj2.l
		let r2 = l2 + obj2.w
		let t2 = obj2.t
		let b2 = t2 + obj2.h

		if( r1 > l2 && l1 < r2 && b1 > t2 && t1 < b2  ) {
			return true
		}
		else {
			return false
		}
}
