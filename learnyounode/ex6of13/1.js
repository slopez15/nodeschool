var fs = require('fs')
var path = require('path')

//var folder = process.argv[2];
//var ext = process.argv[3];

//module.exports = function (args) { /* ... */ }

exports.version = "0.1.0";
exports.mod = mod;

function mod (folder, ext, callback(err, data)){//folder, files, ext
	ext = '.' + ext;
	return [folder, ext];
	//callback(null, data);
}

function callback(err, data){
	if (err){
		return console.error(err)
	}
	var folder = data[0];
	var ext = data[1];
	fs.readdir(folder, 
		function (err, files) {
			if (err){
				return console.error(err)
			}
			var resultArr = undefined;
			files.forEach( //this is not async, i think
				function (file) { //asynchronously compute. WOW! However used forEach, then again is a concept method.
					if (path.extname(file) === ext) {
						console.log(file)
						resultArr.push(file);
					}
				}
			)
			//return resultArr; //careful
		}
	)
}

//mod(folder, ext, callback(err, data){});
var arr = mod(process.argv[2], process.argv[3], callback(err, data));
console.log("arr: " + arr);



//template
function bar (callback) {
	foo(
		function (err, data) {
			if (err)
				return callback(err) // early return

			// ... no error, continue doing cool things with `data`

			// all went well, call callback with `null` for the error argument

			callback(null, data)
		}
	)
}
/**/






var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3] //the correct way without other method invoking

exports.yup = function (folder, ext, callback(null, data)){
	ext = '.' + ext;
	var folder = data[0];
	var ext = data[1];

	fs.readdir(folder, function (err, files) {
	  if (err) return console.error(err)
	  files.forEach(function (file) { //asynchronously compute. WOW! However used forEach, then again is a concept method.
		if (path.extname(file) === ext) {
		  console.log(file)
		}
		callback(null, files);
	  })
	})
	
	
}

//mod(folder, ext, callback(err, data){});
var arr = mod(process.argv[2], process.argv[3], callback(err, data));
console.log("arr: " + arr);












