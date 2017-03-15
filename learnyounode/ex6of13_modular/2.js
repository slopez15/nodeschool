var local = require('./makeItModular.js');
var fs = require('fs');
var path = require('path');

//var folder = process.argv[2];
//var ext = '.' + process.argv[3];

function mod(folder, ext, 
	fs.readdir(err, folder, //readdir format is fs.readdir(pathDir, 'utf8', callback...
		function (err, files) {
			if (err){
				return console.error(err);
			}
			var resultArr = undefined; //[]
			files.forEach(
				function (file) { //asynchronously compute. WOW! However used forEach, then again is a concept method.
					if (path.extname(file) === ext) {
						console.log(file);
						resultArr.push(file);
					}
				}
			);
			return resultArr;//careful with this guy, might call before finishing
		}
	);
){
ext = '.' + ext;
}
//mod(folder, ext, callback(err, data){});
var arr = mod(process.argv[2], process.argv[3], callback(err, data));
console.log("arr: " + arr);





var fs = require('fs')
var path = require('path')

//var folder = process.argv[2];
//var ext = process.argv[3];


function mod (folder, ext, callback(err, data)){//folder, files, ext
	ext = '.' + ext;
	return [folder, ext];
}

function callback(err, data){
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
		}
	)
	return resultArr;
}

//mod(folder, ext, callback(err, data){});
var arr = mod(process.argv[2], process.argv[3], callback(err, data));
console.log("arr: " + arr);





/*Previous Official Solution
var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3] //the correct way without other method invoking

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) { //asynchronously compute. WOW! However used forEach, then again is a concept method.
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/
/*Official Solution

*/


/*other callback forms
//Simple synchronous
var myNumber = 1
function addOne() { myNumber++ } // define the function
addOne() // run the function
console.log(myNumber) // logs out 2



//asynchronous, but prints number before returning updated value
var fs = require('fs') // require is a special function provided by node
var myNumber = undefined // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
  })
}

addOne()

console.log(myNumber) // logs out undefined -- this line gets run before readFile is done



//asynchronous
//waits to readFile before callbacks to doneReading
//waits to addOne before callbacks to logMyNumber
var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)



//run a; b after a finishes; c after b finishes
a(function() {
  b(function() {
    c()
  })
})



//DIFFERENT FORMATS
//method-function clean format
var fs = require('fs')
fs.readFile('movie.mp4', finishedReading)

function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
}


//CONCEPT: same as above, but proves functions are later and methods are now; define/invoke
var fs = require('fs')

function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
}

fs.readFile('movie.mp4', finishedReading)



//DIRTY, YET VERY JSON MINIFIed-ish
var fs = require('fs')

fs.readFile('movie.mp4', function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
})

*/













