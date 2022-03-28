// pages/detail/detail.js
Page({
    /**
     * 组件的初始数据
     */
    data: {
      detail:{}
    },
    onLoad(option){
      let obj = JSON.parse(option.item);
      this.setData({
          detail:obj
      })
    }
})
