<template>
    <div>
        <div class="cate">
           <div class="head">
               新闻分类
           </div>
           <!-- 具名插槽:组件标签体里面name为topslot的内容会被放在这里 -->
           <slot name='topslot'></slot>
           <!-- 具名插槽:组件标签体里面name为bottomslot的内容会被放在这里 -->
           <slot name='bottomslot'></slot>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        
        }
    },
    
}
</script>

<style lang="less" scoped>
.cate{
    margin-left: 10px;
    width: 200px;
    height: 300px;
    background-color: turquoise;

  .head{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        background-color: violet;

    }
    img{
        width: 100%;
    }
}
    
</style>