// ライブラリの読み込み
var http = require('http');

// サーバオブジェクトの作成、実行
http.createServer(function (req, res) {
  // ヘッダとしてHTTPステータスコードと形式を設定
  res.writeHead(200, {'Content-Type': 'text/html'});

  // 表示する内容を設定する
  res.end('<h1>Hello World</h1>');
}).listen(1337, 'localhost');

// URLやサーバの止め方を表示する
console.log('Server running at http://localhost:1337/');
console.log('Ctrl + C to stop server');