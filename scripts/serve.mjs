import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
const mime = {'.html':'text/html; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
http.createServer(async (req,res) => {
  const path = new URL(req.url,'http://localhost').pathname;
  if (path !== '/' && path !== '/index.html' && !/^\/assets\/[\w.-]+$/.test(path)) {res.writeHead(404).end();return;}
  const file = path === '/' ? 'index.html' : path.slice(1);
  try {const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)] || 'application/octet-stream'}).end(data);}
  catch {res.writeHead(404).end();}
}).listen(Number(process.env.PORT || 4173),'127.0.0.1',()=>console.log('兴趣卡助手 http://127.0.0.1:'+(process.env.PORT || 4173)));
