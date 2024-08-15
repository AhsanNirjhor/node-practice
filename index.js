const index2 = require('./index2');

const v = 5;
console.log('heelo World');
console.log(v);
console.log(index2.b);
console.log(index2.test);
index2.test();

const School = require('./school');

const school = new School();

school.on('BellRing', ({ period, text1 }) => {
    console.log(`We need to run because ${period} ${text1}`);
});

school.startPeriod();
