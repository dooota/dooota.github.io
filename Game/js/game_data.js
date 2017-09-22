class GameData {
  constructor(callback) {
    //图片加载完成后的回调函数
    this.callback = callback
    this.imgready = 0

    //所有的图片资源
    this.aImg = this.newImg()

    //背景数据
    this.bgdata = {
      x1 : 0,
  		y1 : 0,
  		x2 : 0,
  		y2: 600,
  		w : 400,
  		h : 600,
  		mData : {
  			m : 0, 				//飞行距离
  			mspeed : 0,   //飞行速度
  			diffmark : 1,
  		},
  		textdata : {
  			textleft : 350,	//分数left值
  			textmark : 10,  //分数标记
  		},
    }
    //本机数据
    this.playdata = {
      l : 140,	  //本机的left值
  		t : 500,	  //本机的top值
  		w : 120,    //本机的宽度
  		h : 100,	  //本机的高度
  		speed : 6,  //本机的移速
    }

    //本机子弹数据
    this.bulldata = {
      //设置子弹的数据
  		l : 0,
  		t : 0,
  		w : 80,
  		h : 60,
  		num : [],           //填充子弹数据
  		speed : 6,          //子弹发射速度
  		cool : 0 ,          //子弹冷却时间
  		maxcool : 40,       //子弹最大冷却时间
    }

    //敌机数据
    this.enemydata = {
      t : -60,
  		l : 0,
  		w : 80,
  		h : 60,
  		speed : 3,                 //敌机飞行速度
  		num : [],                  //填充敌机数据
  		type1 : [526,147,117,89],  //敌机1的图片坐标
  		type2 : [539,238,110,78],  //敌机2的图片坐标
  		cool : 0,                  //敌机刷新冷却
  		maxcool : 50,              //敌机刷新最大冷却
    }

    //金币数据
    this.golddata = {
      mark : 0,
  		speed : 5,                //金币飞行速度
  		num : [],                 //填充金币数据
  		type : [454,353,31,34],   //金币的图片坐标
    }
  }

  newImg() {
    //所有的图片路径
    var imgpath = {
      bg : 'img/01.jpg',
      loadimg : 'img/loading.jpg',
      integrate : 'img/batch.png',
    }

    for(let attr in imgpath) {
      let img = new Image()
  		img.src = imgpath[attr]

      img.onload = () => {
        imgpath[attr] = img
        this.imgready++
        if(this.imgready == 3)  this.callback(this)
      }
    }

    return imgpath
	}
}
