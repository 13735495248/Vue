// pages/myaudio/myaudio.js
Page({

  /**
  * 音乐下载地址:https://www.ytmp3.cn/
  */
  data: {
    poster: 'https://t11.baidu.com/it/u=2503256068,1667772469&fm=175&s=7AF021C65482C6FCC08CB6BD03008012&w=640&h=480&img.JPEG',
    name: '青花瓷',
    author: '周杰伦',
    src: '../../assets/qhc.mp3',

  },

  //首次显示页面，会触发onReady方法，渲染页面元素和样式，一个页面只会调用一次
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }

  
})