// index.js
Page({
  data: {
    keywords:'',
    //源数组
    list:[
      {
        name:'刘备',
        age:18
      },
      {
        name:'关羽',
        age:19
      },
      {
        name:'张飞',
        age:20
      },
      {
        name:'赵云',
        age:21
      },
      {
        name:'马超',
        age:22
      },
    ],
    //搜索数组
    // changeAry:[
    //   {
    //     name:'刘备',
    //     age:18
    //   },
    //   {
    //     name:'关羽',
    //     age:19
    //   },
    //   {
    //     name:'张飞',
    //     age:20
    //   },
    //   {
    //     name:'赵云',
    //     age:21
    //   },
    //   {
    //     name:'马超',
    //     age:22
    //   },
    // ],
  },

  change(){
    let ary = this.data.list.filter(item=>{
      return item.name.includes(this.data.keywords);
    })

    this.setData({
      list:ary
    })
  },
  onLoad() {
   
  },
 
})
