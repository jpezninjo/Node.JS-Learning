var fs = require("fs");

var writerStream2 = fs.createWriteStream('input.txt');
writerStream2.write("DATA DATA DATA this excercise made me create a new text file :o",'UTF8');
writerStream2.end();


// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
console.log("Check the file otput.txt");