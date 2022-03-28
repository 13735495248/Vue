<template>
    <div>
        <h2>登录页面</h2> 
        <input type="text">
    </div>
</template>
<script>
export default {
    /* 
    当使用keep-alive缓存组件,会触发两个新的生命周期钩子函数:
      activated:组件可见活跃状态时触发
      deactivated:组件不可见不活跃状态时触发 
    */
    activated(){
      console.log('组件可见活跃的状态')
    },

    deactivated(){
        console.log('组件不可见不活跃状态')

    }
}
</script>