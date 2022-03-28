<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">列表1</el-menu-item>
          <el-menu-item index="1-2">列表2</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">订单</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">我的</span>
      </el-menu-item>
    </el-menu>
    <button class="btn" @click="isCollapse=!isCollapse">开关</button>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isCollapse:false
        }
    }
}
</script>
<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .btn{
      position: fixed;
      top: 10px;
      right: 100px;
  }
</style>