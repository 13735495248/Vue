## Vue脚手架是什么?
Vue脚手架(vue-cli)是vue官方提供的开发工具,它将一些工作中常用的功能封装在了一起
极大提高了我们的开发效率.vue-cli是基于nodejs+webpack封装的命令行工具

## 安装Vue脚手架步骤!
1.第一次安装需要在终端输入 npm i @vue/cli -g
2.新建一个文件夹,在当前文件夹路径打开cmd,然后创建vue
脚手架项目,创建指令是: vue create 项目名(尽量使用英文名)
3.启动项目: npm run serve
# 如果下载慢,需要配置下淘宝镜像(npm默认从国外的服务器下载第三方包,配置了淘宝镜像,npm就从国内服务器下载了,速度会更快):
  npm config set registry https://registry.npm.taobao.org

# 4.关于npm run xxxx
npm 允许在package.json文件里面，使用scripts字段定义脚本命令
例如在package中如下定义
{
  "scripts": {
    "build": "node index.js"
  }
}
上面代码是package.json文件的一个片段，里面的scripts字段是一个对象。它的每一个属性，对应一段脚本。比如，build命令对应的脚本是node build.js。

命令行下使用npm run命令，就可以执行这段脚本。
npm run build
# 等同于执行
node index.js
