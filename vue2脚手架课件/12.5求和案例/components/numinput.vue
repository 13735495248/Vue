<template>
    <div class="mc">
        <h2>输入数字组件</h2>
        <div>
            一个加数a: <input type="text" v-model.number="num1">
        </div>
        <div>
            一个加数b: <input type="text" v-model.number="num2">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num1:0,
            num2:0
        }
    },

    watch:{
        //监听num1的变化,一旦监听到变化修改store中a的值
        num1(newval,oldval){
          this.$store.commit('modia',newval);
        },
        //监听num2的变化,一旦监听到变化修改store中b的值
        num2(newval,oldval){
          this.$store.commit('modib',newval);
        },

    }
}
</script>

<style scoped>
  .mc{
      border: 1px solid skyblue;
  }    
</style>