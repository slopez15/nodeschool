//prints nummber of new lines in file
//cat file | wc -l

/* Documentation used node modules
fs module: C:\Users\sauls\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html
buffer module: C:\Users\sauls\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\buffer.html
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
var bufferObj = fs.readFileSync(pathToFile);
var string = bufferObj.toString();
var stringArray = string.split("\n");
console.log(stringArray.length-1); //not sure why -1, but said 'will have 1 extra, maybe cause no new line \n at end'















