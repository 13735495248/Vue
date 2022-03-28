<template>
  <div>
    <h2>首页</h2>
    <div>
      用户名:<input type="text">
    </div>
    <button class="item" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: "/login"}, () => {
        //跳转成功的回调函数
      });
    },
  },
};
</script>