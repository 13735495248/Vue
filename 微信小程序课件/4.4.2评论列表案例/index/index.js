const app = getApp()

Page({
  data: {
    list:[]
  },

  foo(e){
    this.setData({
      list:e.detail
    })
  }

})
