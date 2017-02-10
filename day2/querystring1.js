const querystring = require('querystring');

var str = 'a=1&b=2&c=3';

console.log(querystring.parse(str));

//运行结果是：{ a: '1', b: '2', c: '3' }