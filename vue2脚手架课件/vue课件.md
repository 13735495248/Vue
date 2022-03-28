## 1.package.json文件说明
  //调试和打包的命令
  "scripts": {
    <!-- 终端输入npm run serve可以运行项目 -->
    "serve": "vue-cli-service serve",
    <!-- 
    终端运行npm run build会对项目进行打包,即把.vue,.less等浏览器不认识的文件
    编译成浏览器认识的.html,.css,.js等文件,执行完会生成一个dist文件夹,在公司上班
    时,代码如果写好了,将这个打包好的文件发给服务端人员即可.
    -->
    "build": "vue-cli-service build",
    <!-- 这个命令没啥用 -->
    "lint": "vue-cli-service lint"
  },
## 2.mixin
  可以把多个组件的相同的配置项提取出来 放在一个文件中
    data(){}
    methods(){}
    .......等  
## 3.安装less
  npm install less
  npm install less-loader@7
## 关闭eslint语法检查
  创建vue.config.js文件
  里面输入：
    module.exports = {
    lintOnSave:false,//关闭语法检查
    }

       
          