<template>
  <div>
    <div class="cate">
      <slot>我是默认插槽,组件的标签体没有内容,该文字才会显示</slot>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

};
</script>

<style scoped>
.cate {
  margin-top: 10px;
  border: 1px solid skyblue;
}
.title {
  font-size: 20px;
  color: black;
  font-weight: bold;
}
</style>