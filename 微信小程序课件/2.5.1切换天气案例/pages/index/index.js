// index.js
Page({
  data: {
    flag:true
  },
  // 事件处理函数
  foo(e){
    this.setData({
      flag:!this.data.flag
    })
  },
  onLoad() {
   
  },
 
})
