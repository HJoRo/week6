var http = require('http');
var fs = require('fs');
var path = require('path');
const { listenerCount } = require('process');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './about') {
        filePath = './about.html';
    } else {
        filePath = './index.html'
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4'
    };
    var contentType = mimeTypes[extname] || 'application/octet-stream';
    fs.readFile(filePath, function(error, request) {
        console.log(filePath);
        if (error) {
            if(error.code == 'ENDENT') {
                fs.readFile('./404.html', function(error, request) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(request, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, error ' +error.code+'..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(request, 'utf-8');
        }
    });
}).listen(8080);
console.log('Server running at localhost:8080')
