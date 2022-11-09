const events= require('events');
const emitter= new events.EventEmitter();
let event1=function(){
    console.log("Event 1");
}
let event2=function(){
    console.log("Event 2");
}
emitter.on("myevent",event1);
emitter.on("myevent",event2);//add event
// emitter.emit("myevent"); // for fire event
emitter.removeListener("myevent",event1); //to remove event
emitter.emit("myevent"); 
