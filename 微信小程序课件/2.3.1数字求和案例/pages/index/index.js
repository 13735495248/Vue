const app = getApp()

Page({
  data: {
    firstname:'',
    lastname:''
  },

  firstmsg(e){
    this.setData({
      firstname:e.detail.value
    })
  },

  lastmsg(e){
    this.setData({
      lastname:e.detail.value
    })
  }
})
