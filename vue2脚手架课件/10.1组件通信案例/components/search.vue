<template>
    <div class="search">
        <h2>搜索组件</h2>
        <input type="text" v-model='keywords'><button @click="search">搜索</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
          keywords:''
        }
    },

    methods:{
        search(){
            //触发搜索事件,并把输入框内容传递过去
            this.$bus.$emit('search',this.keywords);
        }
    }
}
</script>

<style scoped>
    .search{
        border: 1px solid red;
        margin: 10px;
    }
</style>