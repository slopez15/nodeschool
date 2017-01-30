//console.log("process.argv:\n");
//console.log(process.argv) 
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
var total = 0;
for (var i = 2; i < process.argv.length; i++){
	total += Number(process.argv[i]);
}
//console.log("total: " + total);
console.log(total);
