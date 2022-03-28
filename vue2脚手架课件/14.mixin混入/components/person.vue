<template>
    <div class='person'>
        <div>人组件</div>
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
           name:'刘备',
           age:45
        }
    },
    mixins:[mixin]

}
</script>