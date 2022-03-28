<template>
    <div id="app">
        <div>a:{{a}}</div>
        <div>b:{{b}}</div>
        <div>a,b的和:{{s}}</div>
        <button @click='add'>a增加1</button>
    </div>
</template>

<script>
export default {
   computed:{
       a(){
           return this.$store.state.a;
       },

       b(){
           return this.$store.state.b;
       },

       s(){
           return this.$store.getters.sum;
       }
   },

   methods:{
       add(){
           console.log(this.$store);
           this.$store.dispatch('runadd');
       }
   }
   
}
</script>

<style scoped>
    
</style>