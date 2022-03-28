<template>
    <div>
        <h2>名词介绍</h2>
        <!-- 使用$route.params可以获取参数 -->
        {{$route.params.title}}:{{$route.params.introduction}}
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