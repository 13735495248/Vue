<template>
    <div class='person'>
        <div>我叫{{name}}</div>
        <div>我今年{{age}}岁</div>
        <button @click="sendName">发送name给父组件</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
           name:'刘备',
           age:45
        }
    },

    methods:{
      sendName(){
        //调用父组件中声明的回调函数,并传递参数过去,父组件就可以获取到name了
        this.getPersonName(this.name);
      }
    },
    //声明接收的属性
    props:{
        getPersonName:{
          type:Function,//类型
          default:function(){},//默认值
        }
    
    }
}
</script>