<template>
    <div>
        <h2>名词介绍</h2>
        <!-- 使用$route.query可以获取参数 -->
        {{$route.query.title}}:{{$route.query.introduction}}
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            
        }
    }
}
</script>