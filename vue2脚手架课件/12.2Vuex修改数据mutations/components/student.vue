<template>
    <div>
        <h2>学生组件</h2>
        考试分数:{{myscore}}
        <div>
            <button @click="modi">直接修改state</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        modi(){
            this.$store.state.score = '刘备'
        }

    },
    computed:{
        myscore(){
            return this.$store.state.score;
        }
    }
}
</script>