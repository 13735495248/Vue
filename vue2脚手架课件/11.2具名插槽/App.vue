<template>
    <div id="app">
           
        <category>
           <div slot="topslot">
               慢品人间烟火色，闲关万事岁月长
           </div>
           <a slot="bottomslot" href="http://www.baidu.com">更多新闻</a>
        </category>
        <category >
            <img slot="topslot" 
            src="https://img2.baidu.com/it/u=1354316170,1951449891&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=457">
             <a slot="bottomslot" href="http://www.baidu.com">更多图片</a>
        </category>
    </div>
</template>

<script>

import category from './components/category.vue'
export default {
    components:{
        category
    },
    methods:{
        
    },

    mounted(){
       
    }
}
</script>

<style scoped>
  #app{
      display: flex;
      justify-content: center;
  }
    
</style>