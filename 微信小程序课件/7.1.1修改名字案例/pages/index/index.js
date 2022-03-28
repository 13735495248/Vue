// index.js
Page({
  data: {
    name:'刘备'
  },
  gomodi(){
    wx.navigateTo({
      url: '/pages/modi/modi',
    })
  },
  onLoad() {
    
  },
  onShow(){
    let name = wx.getStorageSync('name');
    if(name){
      this.setData({
        name
      })
    }
  }
 
})
