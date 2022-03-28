const app = getApp()

Page({
  data: {
    type:0
  },
  changeZS(){
    this.setData({
      type:1
    })
  },
  changeFS(){
    this.setData({
      type:2
    })
  },
  changeCK(){
    this.setData({
      type:3
    })
  }
})
