<template>
  <div id="app">
    <!-- 
        属性前不加冒号:,传递给子组件的是字符串
        属性前加:,说明使用了v-bind绑定,传递给子组件的是表达式age的值99
    -->
    <person name="刘备" :age="age"></person>
  </div>
</template>


<script>
/* 引入子组件person */
import person from "./components/person.vue";
export default {
  data() {
    return {
      age: 99,
    };
  },
  components: {
    person,
  },
};
</script>