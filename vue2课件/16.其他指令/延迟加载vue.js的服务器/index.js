const http = require("http");
const fs = require('fs');
const server = http.createServer();
function sleep(delay) {
    for (var t = Date.now(); Date.now() - t <= delay;);
}


server.on('request', function (req, res) {
    if (req.url === '/vue.js') {
        fs.readFile('./public/vue.js', function (err, data) {
            if (!err) {
                // 调用方法，同步执行，阻塞后续程序的执行；
                sleep(500);
                res.end(data.toString());
            }
        })
    }
})
server.listen(3000, function () {

});

