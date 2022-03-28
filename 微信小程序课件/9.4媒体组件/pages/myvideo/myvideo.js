// pages/myvideo/myvideo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]

  },

  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
})