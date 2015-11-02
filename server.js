var http = require('http'),
    fs = require('fs'),
    path = require('path');

var server = http.createServer(function(req, res){
    var fileName = path.basename(req.url) || 'index.html',
        fileDir = (path.extname(req.url) === '.css') ? './css/' : './',
        filePath = fileDir + fileName;
    
    fs.stat(filePath, function(err, stats){
        if(!err){
            fs.readFile(filePath, function(err, content){
                if(!err){
                    res.end(content);
                }
                else{
                    console.log(err);
                }
            });
        }
        else{
            console.log('file not found:' + filePath);
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('404 Not found');
        }
    });
    
});

server.listen(3000);
console.log('server up on port:3000.');