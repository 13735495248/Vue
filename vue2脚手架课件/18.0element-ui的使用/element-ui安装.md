# 1.cd到你的项目根目录,即package.json文件夹所在的目录

# 2.npm i element-ui

# 3.在main.js里面引入elelment-ui
import Vue from "vue"
//全部引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App.vue'
//按需引入:我需要使用按钮插件,就在这里引入下
import { Button,Table } from 'element-ui';
//使用按钮插件
Vue.use(Button);
Vue.use(Table);
new Vue({
    render:h=>h(App)
}).$mount('#app');

# 4.在App组件使用按钮:
<template>
    <div id="app">
        <el-button>按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
    </div>
</template>

<script>
export default {

}
</script>
