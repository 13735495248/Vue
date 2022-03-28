// index.js
Page({
  data: {
    
  },
  // 事件处理函数
  foo(){
    let person = {
      name:'刘备',
      age:18
    }
    wx.navigateTo({
      url: '/pages/login/login?person='+JSON.stringify(person),
    })
  },
  onLoad() {
   
  },
 
})
