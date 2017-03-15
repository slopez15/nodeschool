//prints number of new lines in file asynchronously
//cat file | wc -l

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

var pathToFile = process.argv[2];
fs.readFile(pathToFile, 
	function (err, bufferObj){
	if (err){
		return console.log(err);
	}
	var string = bufferObj.toString();
	var stringArray = string.split("\n");
	console.log(stringArray.length-1); //not sure why -1, but said 'will have 1 extra, maybe cause no new line \n at end'
})

/*Official Solution
var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used //utf8 to convert buffer to string in one go
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
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













