// index.js
Page({
  data: {
    index:0,
    list:[
      "梨子",
      "苹果",
      "菠萝",
      "玉米"
    ]
  },
  change(e){
    //修改索引为当前选中的索引 
    this.setData({
      index:e.detail.value
    })
  },
  
  onLoad() {
   
  },
 
})
