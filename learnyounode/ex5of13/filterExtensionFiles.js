//prints list of files in a directory, filtered by extension not prefixed by '.'
//find path -type extension 

/* Documentation for node modules and asynchronous callback concept
fs module: C:\Users\sauls\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html
buffer module: C:\Users\sauls\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\buffer.html
callbacks: https://github.com/maxogden/art-of-node#callbacks
*/

//process.argv[i]
/*windows argv
[ 'C:\\Program Files\\aPrograms\\nodejs\\node.exe',
  'C:\\Users\\sauls\\zProgramming\\GitHub\\nodeschool\\ex2of13\\sumCmdArg.js',
  '1',
  '2',
  '3' ]
*/
/*linux argv
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
*/
var fs = require('fs');
var path = require('path');

var pathDir = process.argv[2];
var extension = process.argv[3];

//console.log(pathDir);
//console.log(extension);

fs.readdir(pathDir, 'utf8', function callback(err, list){
	if (err){
		return console.log(err);
	}
	//list = list.toString();
	//list = list.split(","); //not sure, but maybe not needed if comma seperated. js knows or thinks already array.
	//console.log("list: " + list + "\n");
	for(var i =0; i < list.length; i++){
		var fileExtension = path.extname(list[i]);
		//console.log("element: " + list[i]);
		//console.log("ext: " + fileExtension);
		//console.log("EXT: " + extension);
		if(extension === fileExtension.replace('.','')){ //replace wasn't mentioned in tutorial, so this was a bit of a cheat
			console.log(list[i]);
		}
	}
	//console.log("fileExt type: " + typeof(fileExtension));
	//console.log("ext type: " + typeof(extension));
});

/*Official Solution
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













