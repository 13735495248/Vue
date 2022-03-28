// index.js
Page({
  data: {
    selectIndex:0,
    list:[1,2,3,4,5,6,7,8]
  },

  foo(e){
    console.log(e);
   this.setData({
     selectIndex:e.currentTarget.dataset.index
   })
  },
  
  onLoad() {
   
  },
 
})
