<template>
  <div class="myapp">
    <div 
    class="item" 
    @click='clickmsg(item)'
    v-for="(item, index) in fruits" 
    :key="index">
      <img :src="item.select ? selectimg : unselectimg" />
      <div class="title">{{ item.name }}:{{ item.price }}元</div>
    </div>

    <div class="sum">合计:{{sum}}元</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* 图片路径需要用require引入,否则显示不出来 */
      selectimg:require("./imgs/select.png"),
      unselectimg: require("./imgs/unselect.png"),
    };
  },

  methods:{
    clickmsg(item){
        /* 将点击的item的select取反,实现多选效果 */
        item.select = !item.select;
    }
  },

  computed: {
    fruits() {
      return this.$store.state.list;
    },

    sum(){
        return this.$store.getters.sum;
    }
  },
};
</script>

<style>
.myapp {
  background: #ddd;
}
.item {
  margin-top: 1px;
  background: skyblue;
  height: 30px;
  display: flex;
  align-items: center;
}
img{
    height: 20px;
    width: 20px;
}
.title{
    margin-left: 10px;
}
.sum{
    color: red;
}
</style>