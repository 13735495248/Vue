// index.js
Page({
  data: {
    score:0
  },
  foo(e){
    //获取子组件实例
    let student = this.selectComponent(".student");
    //修改更新子组件中的score
    student.setData({
      score:e.detail
    });
  }
 
})
