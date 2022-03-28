<template>
  <div class="App">
    <button class="btn" 
    @click="selectindex=index" v-for="(item,index) in btnlist" :key='index'>
     {{item}}
    </button>
    <mytext v-show="selectindex===0"></mytext>
    <list v-show="selectindex===1"></list>
    <search v-show="selectindex===2"></search>
  </div>
</template>

<script>
import list from "./components/list.vue";
import mytext from "./components/mytext.vue";
import search from "./components/search.vue";
export default {
  data() {
    return {
      selectindex:0,
      btnlist: ['文本接口','列表接口', '搜索接口'],
    };
  },
  components: {
    list,
    mytext,
    search,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #eee;
}
.btn{
    margin-bottom: 10px;
}
</style>
