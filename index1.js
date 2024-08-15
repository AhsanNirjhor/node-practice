const mathlib = require('./math');
const qouteslib = require('./qoutes/index2');

const app = {};

app.config = {
    timeBettweenQoutes: 1000,
};

app.printqoute = function printqoute() {
    const allQoute = qouteslib.allQoute();

    const { length } = allQoute;

    const random = mathlib.getRandomNumber(1, length);

    const selectQoute = allQoute[random - 1];

    console.log(selectQoute);
};

app.infiniteloop = function infiniteloop() {
    setInterval(app.printqoute, app.config.timeBettweenQoutes);
};

app.infiniteloop();
