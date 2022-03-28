import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    menus: [],
    recommendsongs: [],
    toplist:[]
  },
  //banner接口
  async bannerReq() {
    let res = await request('/banner')
    this.setData({
      banners: res.banners
    })
  },
  //小图标接口
  async menuReq() {
    let res =await request("/homepage/dragon/ball");
    this.setData({
      menus: res.data
    })
  },
  //推荐歌单接口
  async recommendReq() {
    let res = await request("/personalized?limit=10");
    this.setData({
      recommendsongs: res.result
    })
  },
  //歌手排行版
  async toplistReq(){
    let res = await request('/toplist/artist');
    console.log(res);
    //截取前10名的歌手
    this.setData({
      toplist:res.list.artists.slice(0,10)   
    })
  },
  // 点击menu小图标
  clickmenu(e) {
    let src = e.currentTarget.dataset.item.url;
    wx.navigateTo({
      url: '/pages/webview/webview?src=' + src,
    })
  },
  // 点击推荐歌单
  clickrecommend(e){
    let id = e.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: '/pages/playlist/playlist?id=' + id
    })
  
  },
  // 获取更多歌手
  moreSinger(){
    wx.navigateTo({
      url: '/pages/singers/singers',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    this.bannerReq();
    this.menuReq();
    this.recommendReq();
    this.toplistReq();
  },

})