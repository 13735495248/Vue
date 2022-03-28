// components/student/student.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      
    },

    /**
     * 组件的初始数据
     */
    data: {
      score:0
    },

    ready(){
      const app = getApp();
      this.setData({
        score:app.globalData.score
      })
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
