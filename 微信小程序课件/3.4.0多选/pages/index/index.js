// index.js
Page({
  data: {
    list:[
      {num:1,select:false},
      {num:2,select:false},
      {num:3,select:false},
      {num:4,select:false},
      {num:5,select:false},
    ]
  },

  foo(e){
    console.log(e);
    let index = e.currentTarget.dataset.index;
    this.data.list[index].select = !this.data.list[index].select;
    this.setData({
      list:this.data.list
    })
  },
  
  onLoad() {
   
  },
 
})
