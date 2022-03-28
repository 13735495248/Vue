<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <img :src="item.img" />
      <div class="des">
        <div>{{ item.name }}</div>
        <div>{{ item.introduction }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* 测试列表接口 */
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    //get和post请求在mounted中写
    this.$axios.get("http://127.0.0.1:3000/list").then((res) => {
      this.list = res.data;
    });
  },
};
</script>

<style>

.item {
  display: flex;
  align-items: center;
  background: skyblue;
  height: 80px;
  margin-bottom: 1px;
}
img {
  margin-left: 10px;
  width: 60px;
  height: 60px;
}

.des{
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
}
</style>
