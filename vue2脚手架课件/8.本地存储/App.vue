<template>
    <div id="app">
        <button @click="save">存数据</button>
        <button @click='gain'>取数据</button>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },

    methods:{
        save(){
          this.$localSave.setItem('name','刘备');
        },
        gain(){
           console.log(this.$localSave.getItem('name'));

        }
    }
}
</script>