<template>
    <div>
        <div v-if="islogin">
            <login></login>
        </div>
        <div v-else>
            <mymain></mymain>
        </div>
        
        
    </div>
</template>

<script>
import login from './components/login.vue'
import mymain from './components/mymain.vue'
export default {
    data(){
      return{
          islogin:true
      }
    },
    components:{
        login,
        mymain,
    },
    mounted(){
        /* 获取本地存储的user对象 */
        let user = this.$local.getItem('user');
        if(user){
            //如果user存在,说明登录过了,隐藏登录页
            this.islogin = false;
        }else{
            //如果user不存在,说明没有登录过显示登录页
            this.islogin = true;
        }

         //监听登录按钮的点击
        this.$bus.$on('islogin',(islogin)=>{
            if(islogin){
                //如果点击了登录,隐藏登录页,显示首页
                this.islogin = false;
            }
        })
    }

}
</script>