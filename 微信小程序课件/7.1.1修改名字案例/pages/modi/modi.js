// pages/modi/modi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:''
    },
    modi(){
      if(!this.data.name)return;
      wx.setStorageSync('name', this.data.name);
      wx.showToast({
        title: '修改成功',
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      let name = wx.getStorageSync('name');
      if(name){
          this.setData({
              name
          })
      }
    },



    
})