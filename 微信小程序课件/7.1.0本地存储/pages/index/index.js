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
  save(){
    wx.setStorageSync('name',{name:"刘备",age:18});
    wx.showToast({
      title: '数据保存成功!',
    })
  },
  onLoad() {
    
  },
 
})
