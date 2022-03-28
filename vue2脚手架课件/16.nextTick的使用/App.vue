<template>
    <div id="app">
        <div ref='title'>{{msg}}</div>
        <button @click="modi">修改</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'hello vue'

        }
    },
    methods:{
      modi(){
          /* 
          数据更新立马获取该数据绑定的dom元素的textContent属性,发现
          获取到的是变化前的数据,为什么呢? 
          因为Vue在修改数据后，视图不会立刻更新(视图更新是异步的),
          而是等同一事件循环中的所有数据变化完成之后，
          再统一进行视图更新,nextTick方法的回调函数会在下一次页面更新完立即执行,因此
          可以将获取数据的dom操作放到nextTick的回调函数中
          */
          this.msg = '你好';
          this.$nextTick(function(){
              console.log(this.$refs.title.textContent);

          })
          
      }
    }
}
</script>