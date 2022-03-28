<template>
  <div>
    <div class="container">
      <!-- 
        active-class:设置选中的样式
        tag:默认是a标签 建议设置成div
        to:点击去对应的组件
      -->
      <router-link 
      class="item"
      tag="div" 
      active-class="active" 
      to="/login">
      登录
      </router-link>
      <router-link 
      class="item"
      tag="div" 
      active-class="active" 
      to="/register">
      注册
      </router-link>
    </div>
    <!-- keep-alive会缓存标签体中的组件的数据和状态 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<style>
.container{
    display: flex;
    justify-content: center;
    width: 140px;
    height: 40px;
    border: 1px solid #999;
}
.active {
  background: skyblue;
}
.item{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>