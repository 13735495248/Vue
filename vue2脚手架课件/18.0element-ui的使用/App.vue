
<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">注册页面</el-menu-item>
      <el-menu-item index="2">表格管理</el-menu-item>
      <el-menu-item index="3">我的页面</el-menu-item>
    </el-menu>

    <!-- 注册页面 -->
    <div v-if="activeIndex==1">
      <register></register>
    </div>
    
    <!-- 表格管理 -->
    <div v-else-if="activeIndex==2">
      <mytable></mytable>
    </div>

    <!-- 我的页面 -->
    <div v-else>
      <my></my>
    </div>
    
    
  </div>

  
</template>

<script>
import mytable from './components/mytable.vue'
import register from './components/register.vue'
import my from './components/my.vue'
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  components:{
   mytable,
   register,
   my
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background: #eee;
  }
  
</style>