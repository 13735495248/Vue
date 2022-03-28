<template>
    <div class='person'>
        <div>我叫{{name}}</div>
        <div>我今年{{age}}岁</div>
        <button @click="sendName">发送name给父组件</button>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data(){
        return{
           name:'刘备',
           age:45
        }
    },

    methods:{
      sendName(){
        //子组件用emit方法给父组件发送事件
          //emit有两个参数
            //第一个是父组件监听的事件名
            //第二个是事件的参数
        this.$emit('getPersonName',this.name);
      }
    },
    
}
</script>