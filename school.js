const EventEmmiter = require('events');

class School extends EventEmmiter {
    startPeriod() {
        console.log('Class started');

        setTimeout(() => {
            this.emit('BellRing', {
                period: 'second',
                text1: 'ended',
            });
        });
    }
}

module.exports = School;

// setTimeout(() => {
//     emmiter.emit('BellRing', {
//         period: 'second',
//         text1: 'ended',
//     });
// });
