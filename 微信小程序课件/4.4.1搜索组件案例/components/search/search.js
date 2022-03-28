// components/search/search.js
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
      keywords:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
      search(){
          this.triggerEvent('send',this.data.keywords)
      }
    }
})
