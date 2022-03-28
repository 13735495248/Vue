// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello world',
    userInfo: {},
    hasUserInfo: false,
    /* 
    canIUse:判断小程序的API，回调，参数，组件等是否在当前版本可用 
    如何使用canIUse:https://www.cnblogs.com/96net/p/13036592.html
    wx.canIUse('button.open-type.getUserInfo'):button组件是否可以获取
    用户信息
    */
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    /* open-data是否可以获取用户头像和昵称 */
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') 
    && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    /* 页面跳转,去日志页面 */
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    /* 
    推荐使用wx.getUserProfile获取用户信息，
    开发者每次通过该接口获取用户个人信息均需用户确认，
    开发者妥善保管用户快速填写的头像昵称，避免重复弹窗 
    */
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
