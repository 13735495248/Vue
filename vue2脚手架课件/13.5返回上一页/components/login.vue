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
            /* 
            返回到上一页go方法,参数是一个数字:
              0:跳到当前页
              -1:返回到上一页
              -2:返回到上上一页
              -3:......
            */
            this.$router.go(-1);
            /* 返回到上一页back方法 */
            this.$router.back();
        }
    }
}
</script>