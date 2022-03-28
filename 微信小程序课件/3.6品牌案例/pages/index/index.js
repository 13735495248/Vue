// index.js
Page({
  data: {
    id:'',
    name:'',
    keywords:'',
    //源数组
    list:[
      {id:1,name:'宝马'},
      {id:2,name:'大众'},
      {id:3,name:'奔驰'}
    ],
    //专门提供给搜索用的数组
    changeAry:[
      {id:1,name:'宝马'},
      {id:2,name:'大众'},
      {id:3,name:'奔驰'}
    ]
  },
  
  //添加品牌
  add(){
    let {id,name,list} = this.data;
    if(!id||!name)return;
    list.push({id,name});
    this.setData({
      list,
      changeAry:list
    })
  },
  //搜索
  search(){
    let {keywords,list,changeAry} = this.data;
    changeAry = list.filter(item=>{
      return item.name.includes(keywords);
    })
    this.setData({
      changeAry
    })
  },
  //删除
  dele(e){
    let {list} = this.data;
    list.splice(e.currentTarget.dataset.index,1);
    this.setData({
      list,
      changeAry:list
    })
  },
  
  onLoad() {
   
  },
 
})
