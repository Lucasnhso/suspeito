const http = require('node:http');
const fs = require('node:fs');

function handleRequest(req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
        return;
      }

      res.writeHead(200, {'Content-Type': 'text/html'});

      res.end(data);
    });
  } else {
    res.writeHead(302, {'Location': '/'});
    res.end();
  }
}

const server = http.createServer(handleRequest);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
