<template>
    <div>
        <div>
            用户名:<input type="text" v-model="name">
        </div>
        <div>
            密码:<input type="text" v-model="psw">
        </div>
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
          name:'',
          psw:''
        }
    },

    methods:{
        login(){
            if(!this.name || !this.psw){
                alert('请输入用户名和密码');
                return;
            }
            //将用户信息保存到本地
            this.$local.setItem('user',{name:this.name,psw:this.psw});
            //触发islogin事件
            this.$bus.$emit('islogin',true);
            alert('登录成功!');
        }
    },

    
}
</script>