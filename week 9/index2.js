// os module

const os = require('os');
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('Total Memory (in bytes):', os.totalmem());
console.log('Free Memory (in bytes):', os.freemem());

//Path module

const path = require('path');
const filePath = '/path/to/some/file.txt';
console.log('File Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));

//events Module:

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('eventName',() => {
    console.log(`An event has occured!`);
});
myEmitter.emit('eventName');