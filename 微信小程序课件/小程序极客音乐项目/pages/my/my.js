// pages/personal/personal.js
import request from '../../utils/request'
let startY = 0;//手指起始坐标
let moveY = 0;//手指移动坐标
let moveDistance = 0;//手指移动距离
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coverTransition: '',
    userInfo: {},
    recentPlayList: [],//播放记录
    isLogin: false //控制退出登录显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //读取用户基本信息
    let userInfo = wx.getStorageSync('user');
    console.log(userInfo);
    if(userInfo){
      //更新用户信息
      this.setData({
        userInfo: userInfo,
        isLogin: true
      })
    }
  },

  handleTouchStart(event){
    this.setData({
      coverTransition: ''
    })
    //起始手指坐标
    startY = event.touches[0].clientY;
  },
  handleTouchMove(event){
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;

    if(moveDistance <= 0){
      return;
    }
    if(moveDistance >= 100){
      moveDistance = 100;
    }

    //动态更新coverTransform
    this.setData({
      coverTransform: 'translateY('+moveDistance+'rpx)'
    })
  },
  handleTouchEnd(){
        //重置coverTransform
        this.setData({
          coverTransform: 'translateY(0)',
          coverTransition: '0.7s'
        })
  },
  //登录跳转
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login?isFromMy=1',
    })
  },
  //退出登录
  logout(){
    //服务端退出登录状态
    let status = request('/logout');
    console.log(status)
    //删除客户端信息
    wx.removeStorageSync('user')
    this.setData({
      userInfo: {},
      isLogin: false
    })
    wx.reLaunch({
      url: '/pages/login/login',
    })
    wx.showToast({
      title: '退出登录',
      icon: 'success'
    })
  },
 


  
})