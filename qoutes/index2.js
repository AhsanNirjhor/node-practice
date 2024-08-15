const fs = require('fs');

const qoute = {};

qoute.allQoute = function allQoute() {
    const fileContent = fs.readFileSync(`${__dirname}/qoute.txt`, 'utf-8');

    const arrayQoutes = fileContent.split(/\r?\n/);

    return arrayQoutes;
};

module.exports = qoute;
