// index.js
Page({
  data: {
    
  },
  // 事件处理函数
  foo(e){
    //通过e.currentTarget.dataset.自定义的属性,获取点击事件传的参数
    console.log(e.currentTarget.dataset.id);
  },
  onLoad() {
   
  },
 
})
