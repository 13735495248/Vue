// components/myname/myname.js
Component({
  
  properties: {
       
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      clickmsg(){
        /* 
        点击子组件按钮,通过triggerEvent触发send事件,并传参'888'
        注意:
          在组件中,方法要写在methods里面
        */
        this.triggerEvent('send','888');
      }
  }
})
