// index.js
Page({
  data: {
    msg:''
  },
  foo(e){
    this.setData({
      msg:e.detail.value
    })
  },
  onLoad() {
   
  },
 
})
