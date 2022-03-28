<template>
  <div>
    <el-container>
      <el-aside>
        <div @click="list1" class="btn">列表1</div>
        <div @click="list2" class="btn">列表2</div>
      </el-aside>
      <el-container>
        <el-header>头部组件</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods:{
    list1(){
      this.$router.push('/elcontainer');
    },
    list2(){
      this.$router.push('/list2');
    }
  }
}
</script>

<style lang="less" scoped>
    .el-aside{
        background: springgreen;
        height: 100vh;
        .btn{
          height: 30px;
          background: skyblue;
          margin-top: 2px;
        }
    }
    .el-header{
        background: red;
    }
</style>