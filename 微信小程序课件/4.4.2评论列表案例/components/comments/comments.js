// components/comments/comments.js
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
        name:'',
        content:'',
        list:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
      comment(){
          let {name,content,list} = this.data;
          
          if(!name||!content)return;
          list.push({name,content});
          this.triggerEvent('send',list);
          //清空输入框
          this.setData({
              name:'',
              content:''
          })
      }
    }
})
