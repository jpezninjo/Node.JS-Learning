buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
console.log(buf.toString());

buf = new Buffer(19);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
console.log(buf.toString());
console.log("\nThe wacky byte characters above are normal");