<template>
  <div>
    <h2>首页</h2>
    <button class="item" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: "/login",query:{name:'刘备',age:18}}, () => {
        //跳转成功的回调函数
      });
    },
  },
};
</script>