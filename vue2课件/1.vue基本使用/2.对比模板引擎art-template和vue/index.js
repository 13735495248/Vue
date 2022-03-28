/* 
1.安装模板引擎
  npm install art-template
2.引入art-template
const template = require('art-template')
3.使用
  template.render(模板字符串,要替换的数据)
*/
const fs = require('fs');
const http = require('http');
/* 加载模板引擎 */
const template = require('art-template');

const mydata = {
  name:'刘备',
  age:54,
  hobbies:['抽烟','喝酒','烫头']
}

const server = http.createServer();
server.on('request',function(req,res){
  fs.readFile('./1.html',function(err,data){
    if(!err){
      /*
       我们将写有art-template语法的网页字符串模板传给模板引擎,并将网页字符串需要显示的数据
       传给模板引擎,然后模板引擎就可以将网页字符串渲染成页面显示出来.
      */
     const ret = template.render(data.toString(),mydata);
     res.end(ret);
    }
  })
})
server.listen(3000,function(){
  console.log('服务器运行中...')
})

