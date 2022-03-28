import Vue from "vue"

export default{
    install(){
        //文字居中指令
        Vue.directive('tcenter',(element)=>{
          element.style.display = 'flex';
          element.style.justifyContent = 'center';
          element.style.alignItems = 'center';
        })
    }
}