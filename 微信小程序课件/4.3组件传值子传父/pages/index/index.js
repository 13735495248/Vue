// index.js
Page({
  data: {
    
  },
  foo(e){
    // e.detail可以获取到子传给父的数据
    console.log("父获取到了子的数据",e.detail);
  },

  onLoad() {
   
  },
 
})
