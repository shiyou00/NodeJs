const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('www/index.html',function(err,data){
        if(err){
            console.log('404');
        }else{
            res.write(data);
            res.end();
        }
    });
}).listen(8081);