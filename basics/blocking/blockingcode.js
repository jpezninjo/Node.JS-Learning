var fs = require("fs");

var data = fs.readFileSync('sampletext.txt');

console.log(data.toString());
console.log("Program ended");