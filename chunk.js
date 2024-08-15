const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/text.txt`, 'utf-8');
const ourWriteStream = fs.createWriteStream(`${__dirname}/test.txt`);

ourReadStream.on('data', (data) => {
    ourWriteStream.write(data);
});
