<template>
  <div>
    <h2>老师组件</h2>
    考试分数:{{ myscore }}
    <div>
      <button @click="modi">通过mutations修改state</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modi() {
        /* 
          使用commit执行mutations中的方法,commit有两个参数:
            第一个参数:mutations中方法名
            第二个参数:方法的实参
        */
      this.$store.commit("add", 10);
    },
  },
  computed: {
    myscore() {
      return this.$store.state.score;
    },
  },
};
</script>