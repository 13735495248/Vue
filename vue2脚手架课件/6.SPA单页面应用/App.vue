/* 
以.vue结尾的文件是vue的组件,和我们之前学的
Vue.component()组件一样,只不过以文件的形式来写组件
*/
<template>
    <div id="app">
        hello
        <test></test>
    </div>
</template>

<script>
/* 1.引入test组件,注意不能用花括号{}方式引入,否则会报错 */
import test from '@/test.vue'
export default {
    data(){
        return {

        }
    },
    /* 2.注册需要局部使用的组件 */
    components:{
        //test:test触发简写形式,如下
        test
    }
}
</script>