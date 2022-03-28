const pre_url = 'http://127.0.0.1:3000'
 export default function(url,data={}){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:pre_url+url,
      data,
      method:'get',
      header:{
        "cookie":wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item=>item.indexOf('MUSIC_U') !== -1):""
      },
      success:(res)=>{
        //如果是登录请求,将用户cookie存入
        if(data.isLogin){
         wx.setStorageSync('cookies', res.cookies)
        }
        resolve(res.data)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
//模块化语法可能会报错:@babel/runtime/helpers/interopRequireDefault.js找不到等问题
//解决方案:去掉app.json里面的"lazyCodeLoading": "requiredComponents"就好了

