// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:''
  },
  onLoad(option){

  },
  getdata(){
    const person = wx.getStorageSync('name');
    if(person){
      this.setData({
        myname:person.name
      })
    }

  },
  back(){
    wx.navigateBack();
  }
})