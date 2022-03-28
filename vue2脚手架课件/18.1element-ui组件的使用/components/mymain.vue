<template>
  <div class="mymain">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
      @click="clickmsg(index)"
    >
      <div class="name">{{ item.name }}</div>
      <img :src="item.img" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "el-container组件案例", img: require("../arrow.png") },
        { name: "el-card组件案例", img: require("../arrow.png") },
        { name: "el-row组件案例", img: require("../arrow.png") },
        { name: "el-icon组件案例", img: require("../arrow.png") },
        { name: "el-menu组件案例", img: require("../arrow.png") },
      ],
    };
  },

  methods: {
    clickmsg(index) {
      switch (index) {
        //el-container
        case 0:
          this.$router.push({ path: "/elcontainer" });
          break;
        case 1:
          this.$router.push({ path: "/elcard" });
          break;
        case 2:
          this.$router.push({ path: "/elrow" });
          break;
        case 3:
          this.$router.push({ path: "/elicon" });
          break;
        case 4:
          this.$router.push({ path: "/elmenu" });
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
.mymain {
  width: 400px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: skyblue;
    margin-top: 1px;
    height: 40px;
    .name {
      margin-left: 10px;
    }
    img {
      width: 20px;
    }
  }
}
</style>