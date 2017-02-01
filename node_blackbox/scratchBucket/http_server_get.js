//http_server_get.js, there was a http_server_static.js
/*files to try
cookieecho
http_post_client.js
http_server_external.js //api
http_server_get.js //get
http_server_post.js //post compare with get
http_server_static.js
simple_http_client.js
*/
var http = require('http');
var url = require('url');
var messages = ['Hello World', 'From a Node.js server', 'Good Luck'];
http.createServer(function (req, res){
	var resBody = '';
	var resMsg = '';
	var urlObj = url.parse(req.url, true, false);
	var qstr = urlObj.query;
	console.log(urlObj);
	if (!qstr.msg) {
		resMsg = '<h2>No msg parameter</h2>\n';
	}
	else{
		resMsg = '<h1>'+messages[qstr.msg]+'</h1>';
	}
	resBody = resBody + '<html><head><title>Simple HTTP Server</title></head>';
	resBody = resBody + '<body>' + resMsg;
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(resBody + '\n</body></html>');
}).listen(8080);
/*important notes about http
unlike sftp where client connects and stays statefull until unconnected,
http (tcp/ip?) is stateles in where client connects, then disconnects.
This also means, http function does not shoot until requested.
^hmm sounds like aws lambda
node brings forth usefull easy to use asynch
*/

/*Test cases. Enter requests in browser.

	REQUEST:
http://localhost:8080/?
	BROWSER:
No msg parameter
	CONSOLE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?',
  query: {},
  pathname: '/',
  path: '/?',
  href: '/?' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }


REQUEST:
http://localhost:8080/?msg=sup
	BROWSER:
undefined
	CONSOLE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?msg=sup',
  query: { msg: 'sup' },
  pathname: '/',
  path: '/?msg=sup',
  href: '/?msg=sup' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }


REQUEST:
http://localhost:8080/?msg=0
	BROWSER:
Hello World
	CONSOLE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?msg=0',
  query: { msg: '0' },
  pathname: '/',
  path: '/?msg=0',
  href: '/?msg=0' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }


REQUEST:
http://localhost:8080/?msg=1
	BROWSER:
From a Node.js server
	CONSOLE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?msg=1',
  query: { msg: '1' },
  pathname: '/',
  path: '/?msg=1',
  href: '/?msg=1' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }

  
REQUEST:
http://localhost:8080/?msg=2
	BROWSER:
Good Luck
	CONSOLE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?msg=2',
  query: { msg: '2' },
  pathname: '/',
  path: '/?msg=2',
  href: '/?msg=2' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }


REQUEST:
http://localhost:8080/?sup=2
	BROWSER:
undefined
	CONSOLE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?sup=2',
  query: { sup: '2' },
  pathname: '/',
  path: '/?sup=2',
  href: '/?sup=2' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }
  
  
  
SUMMARY:
strict key to get strict value
depending where i maade the request, the responce may be different.
*should test what happens when request with fresh chrome or extensions off


*When entered in chrome's advance REST extension, I got this:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?msg=1',
  query: { msg: '1' },
  pathname: '/',
  path: '/?msg=1',
  href: '/?msg=1' }
*When entered in chrome got this: 
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?msg=1',
  query: { msg: '1' },
  pathname: '/',
  path: '/?msg=1',
  href: '/?msg=1' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico' }


*/
















