// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello People!');
//         res.write('How are you doing?');
//         res.end();
//     } else if (req.url === '/a') {
//         res.write('This is about us page !');
//         res.end();
//     } else {
//         res.write('404 - Not found');
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('listenting on port 3000');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(`${__dirname}/test.txt`, 'utf-8');
    readStream.pipe(res);
});

server.listen(3000);

console.log('listenting on port 3000');
