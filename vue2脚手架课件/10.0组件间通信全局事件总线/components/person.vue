<template>
    <div class='person'>
        <div>我叫{{name}}</div>
        <div>我今年{{age}}岁</div>
        <button @click="sendmsg">传数据给student</button>
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
      sendmsg(){
        //触发msg事件
        this.$bus.$emit('msg','我是person传到student里面的信息');
      }
    },
    
}
</script>