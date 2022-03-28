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
    <!-- router-view表明组件要显示的位置,起到占位的作用 -->
    <router-view></router-view>
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