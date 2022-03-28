// index.js
Page({
  data: {
    
  },
  // 事件处理函数
  foo(){
    /*
    wx.navigateTo:
    保留当前页面,打开某个页面
    注意:不能打开tabbar的页面,打开tabbar使用wx.switchTab方法
    */
    // wx.navigateTo({
    //   url: '/pages/login/login',
    // })

    /* 
    关闭所有页面,打开某个页面
    */ 
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },
  onLoad() {
   
  },
 
})
