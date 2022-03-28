<template>
    <div>
        <div>学生组件</div>
        <div>我叫{{name}}</div>
        <div>我今年{{age}}岁</div>
        <button @click="add">年龄增加1</button>
    </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    data(){
        return{
            name:'小明',
            age:13,
        }
    },
    mixins:[mixin]
}
</script>