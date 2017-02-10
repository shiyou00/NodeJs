const http = require('http');
const urlLib = require('url');

http.createServer(function(req,res){
    req.getDate = urlLib.parse(req.url,true).query;
    console.log(req.getDate);
}).listen(8081);