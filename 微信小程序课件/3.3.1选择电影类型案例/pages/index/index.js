const app = getApp()

Page({
  data: {
    selectIndex:0,
    types:[
      '恐怖',
      '爱情',
      '动作',
      '喜剧',
      '科幻',
      '剧情'
    ]
  },
  click(e){
    this.setData({
      selectIndex:e.currentTarget.dataset.index
    })
  }
})
