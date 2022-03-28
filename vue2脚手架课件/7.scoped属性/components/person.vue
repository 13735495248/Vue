<template>
  <div class="test">
    <div class="title">人组件</div>
    <div>我叫{{ name }}</div>
    <div>我今年{{ age }}岁</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "刘备",
      age: 45,
    };
  },
};
</script>
/* 
在style标签加scoped可以使得style里面的样式只在当前组件生效
scoped原理:一旦style标签添加了scoped属性,style里面所有的标签都会
自动添加一个唯一的'data-v-xxxx'属性,并且自动在所有选择器后面添加一个
data属性选择器,例如.text选择器会变成.text[data-v-xxxx]
 */
<style scoped>
.test {
  background-color: orange;
}

</style>