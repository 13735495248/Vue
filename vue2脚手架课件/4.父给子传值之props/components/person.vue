<template>
    <div class='person'>
        <div>我叫{{name}}</div>
        <div>我今年{{age}}岁</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    /* 父组件传值给子组件,需要子组件先在props对象中定义好要传递的属性 */
    props:{
        name:{
          type:String,//类型
          default:'',//默认值
          required:true,//必须传
        },
        age:{
            type:Number,
            default:0,
        }
    }
}
</script>