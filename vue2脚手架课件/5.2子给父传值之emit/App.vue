<template>
    <div id="app">
        <!-- 父组件声明一个函数 传递给person组件 -->
        <person @getPersonName='getPersonName'></person>
    </div>
</template>

<script>

import person from './components/person.vue'
export default {
    components:{
        person
    },
    methods:{
        getPersonName(name){
         console.log('父组件获取到了子组件的name:',name);
        }
    }
}
</script>