// components/calc/calc.js
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
        num1:0,
        num2:0,
        sum:0
    },
    observers:{
      'num1,num2':function(num1,num2){
        console.log(num1,num2);
        this.setData({
          sum:num1*1+num2*1
        })
      }
    },

    /**
     * 组件的方法列表
     */
    methods: {
      c(){}
    }
})
