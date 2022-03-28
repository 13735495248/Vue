// index.js
Page({
  data: {

  },

  onLoad() {
    // 页面加载完成触发
    console.log('onLoad');
  },
  onShow() {
    //页面显示触发
    console.log('onShow');
  },
  onReady(){
    //页面渲染完成触发

  },
  onHide() {
    //页面隐藏触发
    console.log('onHide');
  },
  /**
     * 监听到页面下拉触发(需要先在json文件开启下拉刷新)enablePullDownRefresh:true
    */
  onPullDownRefresh() {

    /**
     * 关闭刷新
    */
    wx.stopPullDownRefresh({
      success: (res) => {

      },
    })
    console.log("onPullDownRefresh触发了");
  }

})
