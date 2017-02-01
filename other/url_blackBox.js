//'blackBox' testing 'url' node api
//https://nodejs.org/dist/latest-v6.x/docs/api/url.html

var url = require("url");

console.log("\n" + "======================== UniformResourceLocator ========================");
var UniformResourceLocator = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
console.log(UniformResourceLocator);

console.log("\n" + "======================== urlLib ========================");
console.log(url);
//
console.log("\n" + "======================== urlLib values of keys ========================");
for (key in url){
	console.log( key + ": " + url[key]);
}





urlParse = url.parse(UniformResourceLocator); //urlObject
console.log("\n\n\n\n\n" + "======================== urlParse ========================");
console.log(urlParse);
//add more parse params
/*
url.parse(urlString[, parseQueryString[, slashesDenoteHost]])#
Added in: v0.1.25
urlString <String> The URL string to parse.
parseQueryString <Boolean> If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string. Defaults to false.
slashesDenoteHost <Boolean> If true, the first token after the literal string // and preceding the next / will be interpreted as the host. For instance, given //foo/bar, the result would be {host: 'foo', pathname: '/bar'} rather than {pathname: '//foo/bar'}. Defaults to false.
The url.parse() method takes a URL string, parses it, and returns a URL object
/**/

urlFormat = url.format(urlParse);
urlFormatFromString = url.format(UniformResourceLocator);
console.log("\n" + "======================== urlFormat & urlParse.href ========================");
console.log(urlFormat);
console.log(urlParse.href); //value taken from href attrib of urlParse
console.log(urlFormatFromString); //converts urlParse back to String
//both same value... :\

var urlObject = urlParse;
console.log("\n" + "======================== urlObject attribs ========================");
console.log(urlObject.href);
console.log(urlObject.protocol);
console.log(urlObject.slashes);
console.log(urlObject.host);
console.log(urlObject.auth);
console.log(urlObject.hostname);
console.log(urlObject.port);
console.log(urlObject.pathname);
console.log(urlObject.search);
console.log(urlObject.path);
console.log(urlObject.query);
console.log(urlObject.hash);

//
console.log("\n" + "======================== resolve ========================");
//console.log();

/*
url.resolve(from, to)#
Added in: v0.1.25
from <String> The Base URL being resolved against.
to <String> The HREF URL being resolved.
The url.resolve() method resolves a target URL relative to a base URL in a manner similar to that of a Web browser resolving an anchor tag HREF.

For example:

url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
/**/

//
console.log("\n" + "======================== 000 ========================");
//console.log();
//
console.log("\n" + "======================== 000 ========================");
//console.log();
//




console.log("\n");


