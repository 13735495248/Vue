<template>
    <div class="list">
        <h2>list组件</h2>
        <ul>
            <li v-for="(item,index) in mylist" :key='index'>
                姓名:{{item.name}},年龄:{{item.age}}岁
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {name:'刘备',age:18},
                {name:'关羽',age:19},
                {name:'张飞',age:20},
                {name:'赵云',age:21},
                {name:'关平',age:22},
            ],
            mylist:[
                {name:'刘备',age:18},
                {name:'关羽',age:19},
                {name:'张飞',age:20},
                {name:'赵云',age:21},
                {name:'关平',age:22},
            ]
        }
    },

    mounted() {
        //监听search事件,一旦搜索组件点击了搜索按钮,触发回调函数,
        //data是输入框的值
        this.$bus.$on('search',(data)=>{
            //根据输入框关键字过滤留下姓名包含关键字的列表
            this.mylist = this.list.filter((item)=>{
                return item.name.includes(data);
            })
        });
    },

}
</script>

<style scoped>
  .list{
      border: 1px solid skyblue;
      margin: 10px;
  }
</style>>
    
