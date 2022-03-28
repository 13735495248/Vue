<template>
    <div>
        登录页面
        <button @click="goback">返回上一页</button>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },

    mounted(){
        /* $router路由器对象:主要负责路由之间的交互比如页面跳转push和返回back方法 */
        console.log('$router:',this.$router);
        /* $route路由对象:主要提供路由的信息比如name,query,params */
        console.log('$route:',this.$route);
    }
}
</script>