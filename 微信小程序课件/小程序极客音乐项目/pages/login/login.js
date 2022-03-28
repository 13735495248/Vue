import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',//手机号
    password: ''//密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果不是从我的页面进入登录页,进行下面操作
    if (options.isFromMy != '1') {
      let user = wx.getStorageSync('user');
      if (user) {
        wx.switchTab({
          url: '/pages/home/home',
        })
      }
    }


  },
  //先去网易云音乐注册真实的账号和密码,再来登录
  async loginReq() {
    let { phone, password } = this.data;
    console.log(this.data.phone, this.data.password);
    let res = await request(`/login/cellphone`, { phone, password, isLogin: true });
    if (res.code == 200) {
      wx.setStorageSync('user', res.profile);
      wx.switchTab({
        url: '/pages/home/home',
      })
    } else {
      wx.showToast({
        title: res.msg,
        icon: 'none'
      })
    }
  },
  //登录
  login() {
    //得到数据
    let { phone, password } = this.data;
    //验证
    //手机号不为空
    if (!phone) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return;
    }
    //正则验证是一个手机号
    //正则表达式
    let phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return;
    }
    //密码不为空
    if (!password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }
    this.loginReq();


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})