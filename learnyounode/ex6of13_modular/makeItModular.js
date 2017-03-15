var fs = require('fs');
var path = require('path');
//module.exports is varMyMod()
//exports alone doesn't work
//exports.yup is varMyMod.yup()
//module.exports.yup is varMymod.yup()
module.exports = function (folder, ext, callback){
	/*
	//var folder = process.argv[2];
	//var ext = '.' + process.argv[3];
	ext = '.' + ext;
	var dat = [folder, ext];
	callback(null,dat);
	//return dat;
	*/
	
	/**/
	ext = '.' + ext;
	//console.log("-: " + "1st");
	fs.readdir(folder, function (err, files) {
		//console.log("-: " + "3rd");
		if (err){
			return console.error(err);
		}
		var resultArr = [];
		files.forEach(function (file) {
			if (path.extname(file) === ext) {
			  //console.log(file);
			  resultArr.push(file);
			  //return cb(resultArr);
			}
		});
		return callback(resultArr);
	});
	//console.log("-: " + "2nd");
	/**/
	/*
	executes lines before and after readdir, 
		then goes to where called. 
		At some point, will bring async.
	If called module with 
		console.log(mymod.yup(process.argv[2], process.argv[3]));
	Will exec before/after async, 
		then empty line for console.log above. 
		At some point async.
	/**/
}
/*
func = function (err, data){
	var folder = data[0];
	var ext = data[1];	
	
	fs.readdir(folder, function (err, files) {
	  if (err) return console.error(err)
	  files.forEach(function (file) {
		if (path.extname(file) === ext) {
		  console.log(file);
		}
	  })
	})
}
/**/



