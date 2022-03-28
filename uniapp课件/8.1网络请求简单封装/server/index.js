const express = require('express');
const fs = require('fs');
const app = express();
app.all('*', function(req, res, next) {
	res.header('access-control-allow-origin', '*');
	res.header('Access-Control-Allow-Headers','*');
	next();
})
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public/', express.static('./public/'));
app.engine('html', require('express-art-template'));

app.get('/', function(req, res) {
	res.render('doc.html');
});

app.post('/name',function(req,res){
	console.log(req.body);
	req.body.name ??= '';
	res.send({code:1,name:req.body.name});
})

app.get('/age',function(req,res){
	console.log(req.query);
	req.body.age ??= 0;
	res.send({code:1,age:req.query.age});
})




app.listen(3000, function(req, res) {
	console.log('服务器运行中...');
});
