<template>
  <div class="test">
    <div>学生组件</div>
    <div>我叫{{ name }}</div>
    <div>我今年{{ age }}岁</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "小明",
      age: 13,
    };
  },
};
</script>

<style>
.test {
  background-color: yellow;
}
</style>