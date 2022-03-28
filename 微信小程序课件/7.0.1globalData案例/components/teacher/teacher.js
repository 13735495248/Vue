// components/teacher/teacher.js
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
      //获取app应用实例
      const app = getApp();
      this.setData({
          score:app.globalData.score
      })
    },

    /**
     * 组件的方法列表
     */
    methods: {
      //修改分数
      modi(){
        const app = getApp();
        //修改全局score
        //这里不能用解构赋值去修改score,下面这样全局数据
        //score是不会变化的,为什么?
        //let {score} = app.globalData;
        //score++;
        app.globalData.score++;
        this.setData({
            score:app.globalData.score
        })
        this.triggerEvent('send',app.globalData.score)
      }
    }
})
