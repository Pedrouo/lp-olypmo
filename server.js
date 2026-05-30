const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Ignora chamadas favicon automáticas se não houver arquivo, ou serve normalmente
  let reqUrl = req.url;
  
  // Normalizar caminhos de url (ex: remover queries e hashes)
  const questionMarkIndex = reqUrl.indexOf('?');
  if (questionMarkIndex !== -1) {
    reqUrl = reqUrl.substring(0, questionMarkIndex);
  }
  
  let filePath = path.join(PUBLIC_DIR, reqUrl);

  // Se o caminho for uma pasta, tenta servir o index.html dela
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath)) {
    // Tenta resolver URLs amigáveis (ex: /sobre -> /sobre/index.html)
    const friendlyPath = path.join(filePath, 'index.html');
    if (fs.existsSync(friendlyPath)) {
      filePath = friendlyPath;
    } else {
      // Se não existir, tenta adicionar a extensão .html
      const htmlPath = filePath + '.html';
      if (fs.existsSync(htmlPath)) {
        filePath = htmlPath;
      }
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Arquivo não encontrado - Retorna página 404 customizada ou simples
        const errorPage = path.join(PUBLIC_DIR, '404.html');
        fs.readFile(errorPage, (err404, content404) => {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          if (err404) {
            res.end('<h1>404 - Página Não Encontrada</h1><p>O arquivo ou diretório solicitado não existe.</p>');
          } else {
            res.end(content404, 'utf-8');
          }
        });
      } else {
        // Erro de servidor
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Erro no servidor: ${err.code}`);
      }
    } else {
      // Adiciona charset utf-8 para texto e html
      const headerType = (contentType.startsWith('text/') || contentType === 'application/json') 
        ? `${contentType}; charset=utf-8` 
        : contentType;
        
      res.writeHead(200, { 'Content-Type': headerType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
