// index.js
Page({
  data: {
    num:9527,
    msg:'hello'
  },
  foo(e) {
    //this.data可以获取到data对象
    console.log(this.data);
    console.log('foo:',e.currentTarget.dataset.id);
  }

})
