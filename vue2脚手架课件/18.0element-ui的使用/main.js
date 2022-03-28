import Vue from "vue"
import App from './App.vue'
//引入el全部组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//按需引入:我需要使用按钮插件,就在这里引入下
//import { Button,Menu,Table,Input,Form,FormItem,Radio,Switch,DatePicker,Tabs } from 'element-ui';

//使用el插件
// Vue.use(ElementUI);
// Vue.use(Menu);
// Vue.use(Table);
// Vue.use(Input);
// Vue.use(Button);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Radio);
// Vue.use(Switch);
// Vue.use(DatePicker);
// Vue.use(Tabs)
new Vue({
    render:h=>h(App)
}).$mount('#app');