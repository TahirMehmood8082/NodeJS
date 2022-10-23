const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', ()=>{
    console.log('please turn off the motor!')
    setTimeout(()=>{
        console.log('turn off the motor its gentle reminder!')
    }, 3000)
})
console.log("script running")
myEmitter.emit('waterFull')
console.log("script still running")