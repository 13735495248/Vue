// app.js
App({
  onLaunch() {
    //第一次启动时会触发
    console.log('onLaunch');
  },
  //应用显示时触发
  onShow(){
    console.log('onShow');
  },
  //应用隐藏时触发
  onHide(){
    console.log('onHide');
  },
  
  globalData: {
   
  }
})
