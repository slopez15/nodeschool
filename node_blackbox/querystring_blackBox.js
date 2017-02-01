//setup
var urlObj = require("url").parse('http://user:pass@host.com:8080/p/a/t/h?key=value#hash');
var qlib = require("querystring");
//'blackBox' testing 'querystring' node api
//doc: ~~https://nodejs.org/dist/latest-v6.x/docs/api/

// converts query into json. {key:'value'}
var qs = qlib.parse(urlObj.query); 
console.log(qs);

//convert json {key:'val'} to query key=value
qs = qlib.stringify(qs);
console.log(qs);























