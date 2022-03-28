<template>
    <div>
        <h2>登录页面</h2>
        <!-- 子路由的路径需要前面加上父路由的路径 -->
        <router-link to="/login/common">普通用户</router-link>
        <router-link class="vip" to="/login/vip">vip用户</router-link>
        <router-view></router-view>
    </div>
</template>

<style scoped>
  .vip{
      margin-left: 10px;
  }
</style>>
    
</style>