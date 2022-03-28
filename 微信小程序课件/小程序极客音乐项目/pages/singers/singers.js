import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singerList:[]
  },
  //歌手列表
  async singerListReq(){
    let res = await request('/toplist/artist');
    console.log('res:',res);
    //获取歌手
    this.setData({
      singerList:res.list.artists   
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    this.singerListReq();
  },


  
})