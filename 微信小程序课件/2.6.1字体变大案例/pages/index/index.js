const app = getApp()

Page({
  data: {
    font:30
  },

  change(){
    this.setData({
      font:this.data.font+4
    })
  }
})
