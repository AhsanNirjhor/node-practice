const os = require('os');

console.log(os.homedir());
console.log(os.freemem());
console.log(os.version());
console.log(os.hostname());
console.log(os.platform());

const fs = require('fs');

fs.writeFileSync('text.txt', 'hello people. ');
fs.appendFileSync('text.txt', 'hope doing well');

fs.readFile('text.txt', (err, data) => {
    console.log(data.toString());
});

const EventEmmiter = require('events');

const emmiter = new EventEmmiter();

emmiter.on('BellRing', ({ period, text1 }) => {
    console.log(`We need to run because ${period} ${text1}`);
});

setTimeout(() => {
    emmiter.emit('BellRing', {
        period: 'second',
        text1: 'ended',
    });
});

// emmiter.emit('BellRing', {
//     period: 'second',
//     text1: 'ended',
// });
