/*
* 开启第一个服务
*
*
* */

const http = require('http');//引入http模块

http.createServer(function(request,response){

    console.log('有人访问了');

}).listen(8081);


