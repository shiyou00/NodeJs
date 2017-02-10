const querystring = require('querystring');

var json={a:1,b:2,c:3};

console.log(querystring.stringify(json));

//输出a=1&b=2&c=3