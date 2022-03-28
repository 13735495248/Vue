## iconfont在小程序中的使用
1.登录进去iconfont官网：https://www.iconfont.cn，把icon加入到购物车，然后选择下载代码
2.在项目下创建一个iconfont.wxss文件，把压缩包里的iconfont.css里面的内容复制进去
3.进入 https://transfonter.org/, 上传iconfont.ttf,选择base64编码,
convert下载
4.将下载好的文件夹中stylesheet.css样式表中的内容拷贝,替换掉项目中iconfont.wxss里面的@font-face规则
5.在app.wxss文件中引入iconfont.wxss
6.打开压缩包里的demo_index.html文件,切换到Font class,可以查看要使用的图片的class
7.页面中使用:<text class="iconfont xxxx"></text> xxxx是demo_index.html中查看到的图片样式