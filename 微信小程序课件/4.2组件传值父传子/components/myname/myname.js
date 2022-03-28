// components/myname/myname.js
Component({
  /**
  父给子传值,需要子组件在properties先注册要传递的变量,
  properties类似于vue的props
   */
  properties: {
       name:{
         type:String,
         value:'99'
       }
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

  }
})
