const url = require('url');

var str = 'http://localhost:8081/abc?username=abc&password=123';

console.log(url.parse(str,true));