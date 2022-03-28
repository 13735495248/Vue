<template>
    <div class="header">
        <button @click="golist1">列表1</button>
        <button @click="golist2">列表2</button>
    </div>
</template>
<script>
export default {
    methods:{
        golist1(){
            this.$router.push({name:'list1'})

        },
        golist2(){
            this.$router.push({name:'list2'})
        },
        
    }
}
</script>
<style>
    .header{
        background: red;
        height: 100px;
    }
</style>