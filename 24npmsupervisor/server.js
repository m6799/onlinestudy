var http = require('http');
var num = 0;

http.createServer(function(req, res) {
  if(num < 10) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hey, you are No.' + num + ' user!');
    num += 1;
  } else {
    // エラーを発生させる
    throw "exception!";
  }
}).listen(1337, 'localhost');

console.log('server running at localhost:1337');