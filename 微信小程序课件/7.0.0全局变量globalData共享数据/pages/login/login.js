// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:''
  },
  onLoad(option){
    //获取应用实例
    const app = getApp();
    //获取app.js中全局对象globalData的属性name 的值
    const name = app.globalData.name;
    this.setData({
      myname:name
    })

  },
  back(){
    wx.navigateBack();
  }
})