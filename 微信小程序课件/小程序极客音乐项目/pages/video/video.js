// pages/video/video.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex : 0,
    menus:[],
    videoList:[],
    searchDefaultSong:''

  },
  clickMenu(e){
    let item = e.currentTarget.dataset.item;
    this.setData({
      selectIndex:e.currentTarget.dataset.index
    })
    this.videoListReq(item.id);
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  //获取搜索默认最火歌曲
  async searchDefaultReq(){
    let res = await request('/search/default');
    this.setData({
      searchDefaultSong:res.data.showKeyword
    })
  },
  //获取视频列表数据
  async videoListReq(id){
    let res = await request(`/video/group`,{id});
    console.log(res);
    this.setData({
      videoList:res.datas
    })
  },
  // 获取菜单数据
  async menusReq(){
    let res = await request('/video/group/list');
    // 截取数组的前15个元素
    let ary = res.data.slice(0,15);
    this.videoListReq(ary[0].id);
    //设置menus的值
    this.setData({
      menus:ary
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.menusReq();
    this.searchDefaultReq();
  }

})