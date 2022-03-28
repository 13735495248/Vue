<template>
    <div>
        <input type="text" v-model="keywords">
        <button @click="search">搜索</button>
        <div>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    姓名:{{item.name}},年龄{{item.age}}岁,相貌:{{item.lookslike}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            keywords:'',
            list:[]
        }
    },

    methods:{
        search(){
            /* 
            axios第二个参数是一个对象用来传参,对象属性params值是一个对象,
            对象键值中写要传递给服务器的参数
             */
            this.$axios.get('http://127.0.0.1:3000/search',{
                params:{keywords:this.keywords}
            }
            ).then((res)=>{
                console.log(res)
              this.list = res.data;
            });
        }
    },

    mounted(){
        this.$axios.get('http://127.0.0.1:3000/search',{
                params:{keywords:''}
            }
            ).then((res)=>{
              this.list = res.data;
            });
    }
}
</script>