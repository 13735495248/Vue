// components/mysum/mysum.js
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
    person:{
      name:'刘备'
    },
    a:0,
    b:0,
    sum:0   
  },
  /**
   * observers:监听组件data中的数据变化,类似vue中的watch
   * 注意:
   *   observers只能在组件中使用
  */
  observers:{
    "a,b":function(a,b){
     this.setData({
       sum:a+b
     })
    },
    //监听name
    'person.name':function(name){
      console.log(name);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    foo(){
      this.setData({
        a:this.data.a+1
      })
    },
    foo1(){
      this.setData({
        b:this.data.b+1
      })
    },

    modiname(){
      this.setData({
        person:{
          name:this.data.person.name+'!'
        }
      })
    }
  }
})
