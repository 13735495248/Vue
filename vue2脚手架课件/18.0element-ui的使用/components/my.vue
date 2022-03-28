<template>
  <div>
    <el-tabs 
    type="border-card"
    v-model="activeName" 
    tab-position="left" 
    style="height:100vh"
    @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="first">个人信息</el-tab-pane>
      <el-tab-pane label="支付" name="second">支付</el-tab-pane>
      <el-tab-pane label="收藏" name="third">收藏</el-tab-pane>
      <el-tab-pane label="设置" name="fourth">设置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
     data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>