var http = require('http');
var fs = require('fs');
var path = require('path');
const { listenerCount } = require('process');

http.createServer(function (req, res) {
    console.log('request ', request.url);

    var filePath = '.' + http.request.url;
    if (filePath == './') {
        filePath = './about.html';
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
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENDENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, error ' +error.code+'..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(sontent, 'utf-8');
        }
    });
}).listen(8080);
console.log('Server running at localhost:8080/about')