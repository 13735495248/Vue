<template>
    <div>
        <h2>学生组件</h2>
        考试分数:{{myscore}}
    </div>
</template>

<script>
export default {
    computed:{
        myscore(){
            return this.$store.state.score;
        }
    }
}
</script>