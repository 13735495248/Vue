const app = getApp()

Page({
  data: {
    list:[
      {title:'红色',color:'red',select:false},
      {title:'绿色',color:'green',select:false},
      {title:'黄色',color:'yellow',select:false},
      {title:'蓝色',color:'blue',select:false},
      {title:'粉色',color:'pink',select:false},
    ]
  },

  click(e){
    let index = e.currentTarget.dataset.index;
    let item = this.data.list[index];
    item.select = !item.select;
    this.setData({
      list:this.data.list
    })
  }
  
})
