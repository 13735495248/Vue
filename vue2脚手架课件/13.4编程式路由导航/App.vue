<template>
  <div>
    <div class="container">
      <div class="item" :class="{active:flag}" @click="login">登录</div>
      <div class="item" :class="{active:!flag}" @click="register">注册</div>
    </div>
    <!-- router-view表明组件要显示的位置,起到占位的作用 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      flag:true
    }
  },
  methods:{
    login(){
      /* 
      使用this.$router.push可以控制路由跳转
      push方法的第一个参数是一个对象:
        path:路由路径
        query:如果需要传参可以使用query属性
      push方法的第二个参数是成功跳转的回调函数
      */
      this.$router.push({path:'/login',query:{name:'dbb'}},()=>{
        //跳转成功的回调函数
      });
    },

    register(){
      /* 
      使用this.$router.push可以控制路由跳转
      push方法的参数是一个对象:
        name:路由名称
        params:如果需要传参可以使用params属性
        注意:params传参push参数对象要用name属性,不能用path属性
      */
      this.$router.push({name:'register',params:{name:'刘备'}});
    }
  }
}
</script>
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