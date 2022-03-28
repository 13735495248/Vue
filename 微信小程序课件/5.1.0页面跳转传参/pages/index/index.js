// index.js
Page({
  data: {
    
  },
  // 事件处理函数
  foo(){
    wx.navigateTo({
      url: '/pages/login/login?name=刘备&age=18',
    })
  },
  onLoad() {
   
  },
 
})
