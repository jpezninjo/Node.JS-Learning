var e = require("events");
var emitter = new e.EventEmitter();


var connectHandler = function connected(){
	console.log("connected");

	emitter.emit("data_rec");
}


emitter.on("connection", connectHandler);

emitter.on("data_rec", function(){
	console.log('data received');
});



emitter.emit("connection");
console.log("end");