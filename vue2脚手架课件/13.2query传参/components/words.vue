<template>
    <div>
        <h2>名词</h2>
        <div v-for="(item) in list" :key="item.id">
          <!-- 
              v-bind绑定to属性,值是一个对象,
              path是路径;
              query是跳转路径携带的参数,也是一个对象
           -->
          <router-link :to="{
              name:'content',
              query:{
                  title:item.title,
                  introduction:item.introduction
              }
          }">{{item.title}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {id:1,title:'苹果',introduction:'一种水果,甜脆可口'},
                {id:2,title:'周杰伦',introduction:'华语流行音乐天王'},
                {id:3,title:'钟南山',introduction:'中国的白衣天使'},
                {id:4,title:'周星驰',introduction:'喜剧演员,开辟了周氏无厘头流派电影'},
            ]
        }
    }
}
</script>