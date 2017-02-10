const querystring=require('querystring');

var str = 'a=1; b=2; c=3';

console.log(querystring.parse(str,'; '));

//输出：{ a: '1', b: '2', c: '3' }