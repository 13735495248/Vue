// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad(option){
    let person = JSON.parse(option.person);
    console.log(person);
  },
  back(){
    wx.navigateBack();
  }
})