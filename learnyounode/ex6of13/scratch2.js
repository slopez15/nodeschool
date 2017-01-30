var fs = require('fs')
var path = require('path')

//var folder = process.argv[2];
//var ext = process.argv[3];

//module.exports = function (args) { /* ... */ }

module.exports = function bar (callback) {
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



module.exports = function mod (folder, ext, callback(err, data)){//folder, files, ext
	ext = '.' + ext;
	return [folder, ext];
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
			return resultArr; //careful
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













