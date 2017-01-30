var mymod = require('./makeItModular.js');

mymod(process.argv[2], process.argv[3], function (err, formatedFiles) { 
	if (err){
		return console.error(err);
	}
	else{
//		formatedFiles.forEach(function (file) {
			console.log(formatedFiles);
	//	});
//		for (file in formatedFiles){
			
	//	}
	}
});

/*
mymod(process.argv[2], process.argv[3]);
/**/

/*below executes extra undefined due to console.log
console.log(
	mod.yup(process.argv[2], process.argv[3], func)
);
/**/

//mod(folder, ext, callback(err, data){});
//var arr = mod(process.argv[2], process.argv[3], callback(err, data));
//console.log("arr: " + arr);



