1.创建一个store.js文件,并在文件中导出Vuex的Store实例,同时将需要全局共享的变量保存在
state中,代码如下:
export default new Vuex.Store({
    //state保存全局数据
    state:{
      count:1
    }
    
})

2.在main.js中引入store对象
import store from './store'
并在Vue实例中注册使用
new Vue({
    store,
    render:h=>h(App)
}).$mount('#app')
在Vue实例中注册好store之后,就可以在任何组件中通过this.$store获取store中
的数据了
