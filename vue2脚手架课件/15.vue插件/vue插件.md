vue插件本质是一个包含install方法的对象,
它的作用是增强vue的功能.
使用步骤:
  1.创建一个js文件,文件中定义一个包含install方法的对象并用export default暴露
  2.在main.js中import引入
  3.在main.js中,Vue.use(插件名)使用插件