//起始的纵坐标
let startY = 0;
//移动中的纵坐标
let moveY = 0;
//移动的距离
let distance = 0;
Page({
  data: {
    mytransform:'translateY(0)',
    mytransition:""
  },
  touchstart(event){
    startY = event.touches[0].clientY;
    //动画清空
    this.setData({
      mytransition:""
    })
  },
  touchmove(event){
    moveY = event.touches[0].clientY;
    distance = moveY - startY;
    //如果向上滑动则不做任何操作
    if(distance<=0){
      return;
    }
    //如果滑动距离大于100,则让距离恒等于100
    if(distance>100){
      distance = 100;
    }
    this.setData({
      mytransform:`translateY(${distance}rpx)`,
      
    })
  },
  touchend(event){
    this.setData({
      mytransform:`translateY(0)`,
      mytransition:'0.7s'
    })
  },
  onLoad() {
   
  },
 
})
