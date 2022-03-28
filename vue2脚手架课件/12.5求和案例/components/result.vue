<template>
  <div class="mc">
    <h2>求和结果组件</h2>
      和是:{{result}}
    <div>
      <button @click="getresult">获取求和结果</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //触发store中的求和方法sum
    getresult() {
      this.$store.commit("sum");
    },
  },
  computed: {
    //获取store中的求和结果s
    result() {
      return this.$store.state.s;
    },
  },
};
</script>

<style scoped>
  .mc{
    border: 1px solid skyblue;
  }
</style>
