<template>
    <div>
        <div>我是学生</div>
        <div>我在无锡读高中</div>
        <div>{{info}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        info:''
        }
    },
    mounted(){
        //订阅消息
        // this.$pubsub.subscribe('msg',(msgname,data)=>{
        //   this.info = data;
        //   console.log(data);
        // });

        this.$mypubsub.subscribe('msg',(data)=>{
          this.info = data;
          console.log(data);
        })
    }
}
</script>