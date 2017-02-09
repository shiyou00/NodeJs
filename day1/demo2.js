const http = require('http');

http.createServer(function(request,response){
    console.log(request.url);
    response.write('<!doctype html><html><head><title>one page</title></head><body><div style="width:100px; height:100px; background: red;" onclick="this.style.background=\'blue\';"></div></body></html>');
    response.end();
}).listen(8081);