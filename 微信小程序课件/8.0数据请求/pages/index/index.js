// index.js
Page({
  data: {
    text:'',
    list:[],
    keywords:''
  },
  //随机文字接口
  rantext(){
    /**
     * 请求前需要关闭项目校验,否则请求不到本机地址的接口,
     * 设置-->项目设置-->不校验合法域名......
    */
    wx.request({
      url: 'http://127.0.0.1:3000/text',
      method:'get',
      success:(res)=>{
        //注意:success回调要写成箭头函数,否则获取不到页面实例vi
        this.setData({
          text:res.data
        })
        console.log('res:',res);
      }
    })
  },

  //搜索接口
  search(){
    
    wx.request({
      url: 'http://127.0.0.1:3000/search',
      method:'get',
      data:{"keywords":this.data.keywords},
      success:(res)=>{
        //注意:success回调要写成箭头函数,否则获取不到页面实例vi
        this.setData({
          list:res.data
        })
        //console.log('res:',res);
      }
    })

  },
  //请求一般放在页面渲染完成的钩子函数onReady里面
  onReady() {
   this.rantext();
  },
 
})
