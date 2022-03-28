// components/myname/myname.js
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
   
  },

  
  lifetimes:{
    //组件创建完成
    created(){
      console.log('created触发了');
    },
    //组件渲染完成
    ready(){
      console.log('ready触发了');
    },
    //组件卸载完成
    detached(){
      console.log('detached触发了');
    }
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    
  },

  
  
  

})
