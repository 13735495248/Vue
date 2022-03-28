<template>
    <div id="app">
        <person></person>
        <hr>
        <student />
    </div>
</template>

<script>
/* 
后引入的vue文件会把先引入的css样式覆盖,所以person和student组件背景都是橙色
在style标签添加scoped属性会使得style中的样式只在当前组件生效
*/
import student from './components/student.vue'
import person from './components/person.vue'
export default {
    components:{
        person,
        student
    }
}
</script>