const app = getApp()

Page({
  data: {
   
  },
  foo(e){
    console.log('获取到了从子组件传递过来的值:',e.detail);
  }
})
