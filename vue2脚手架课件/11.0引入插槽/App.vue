<template>
    <div id="app">
        <h2>新闻列表</h2>
        <!-- 图片新闻 -->
        <news :category='0'></news>
        <!-- 文字新闻 -->
        <news :category='1'></news>
        <!-- 视频新闻 -->
        <news :category='2'></news>
        <!-- 
            如果我们还有许多自定义样式的新闻,怎么写呢,继续按category分类写吗?
            如果有100种样式需要写100个catagory,这样显然不方便,有没有一种方法可以
            让我们自己定义组件中的内容呢?
        -->
    </div>
</template>

<script>

import news from './components/news.vue'
export default {
    components:{
        news
    },
    methods:{
        
    },

    mounted(){
       
    }
}
</script>

<style scoped>
 
    
</style>