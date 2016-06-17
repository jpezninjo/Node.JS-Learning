function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds

setInterval(printHello, 2000);
setInterval(function(){console.log("spam")}, 1000);