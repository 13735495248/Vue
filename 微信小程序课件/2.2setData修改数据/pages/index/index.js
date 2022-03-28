// index.js
Page({
  data: {
    num:1,
    mychar:'a'
  },
  // 事件处理函数
  foo(){
    /* 
    小程序修改数据不是响应式的,即数据变化页面不会同步变化
    使用setData修改data中数据会主动更新页面
    */
    
    /* 
    注意:
    setData参数是一个对象,该对象包含了需要修改的属性,
    参数对象仅仅是修改data中的属性,并不会替换data对象!!! 
    */
    this.setData({
      //这里this.data.num++为啥数据不会变化?
      num:this.data.num+1
    })
  },
  onLoad() {
   
  },
 
})
