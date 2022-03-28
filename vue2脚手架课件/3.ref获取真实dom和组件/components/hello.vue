<template>
    <div>
        <!-- 
        使用ref属性定义dom或者组件的名字,
        我们可以使用this.$refs.dom名字去获取到dom或者组件
        -->
        <div ref="title" id="title">hello vue</div>
        <person ref='person'></person>
        <button @click="getDom">获取dom元素</button>
        <button @click="getComponent">获取组件实例</button>
    </div>
</template>

<script>
import person from './person.vue'
export default {
    data(){
        return{
            
        }
    },
    components:{
      person
    },
    methods:{
        getDom(){
           //1.直接通过document对象获取真实dom元素 不推荐
           //console.log(document.getElementById('title'));
           //2.通过给元素定义ref名字,使用this.$refs.ref名字,获取真实dom元素
           console.log(this.$refs.title);
        },

        getComponent(){
           //在组件上打ref标记获取到的是组件VueComponent
           //组件VueComponent本质是可复用的Vue实例
           console.log(this.$refs.person);
        }
    }
}
</script>