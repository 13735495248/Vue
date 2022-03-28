// index.js
Page({
  data: {
    myname:''
  },
  // 事件处理函数
  foo(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onLoad() {
    //获取应用实例
    const app = getApp();
    console.log(app);
    //获取app.js中全局对象globalData的属性name 的值
    const name = app.globalData.name;
    this.setData({
      myname:name
    })
  },
 
})
