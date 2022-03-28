<template>
    <div>
        <div>{{msg}}</div>
    </div>
</template>

<script>
/* 测试随机文本接口 */
export default {
    data(){
        return{
            msg:''
        }
    },

    mounted(){
        this.$axios.get('http://127.0.0.1:3000/text').then((res)=>{
            this.msg = res.data;
        });
    }
}
</script>