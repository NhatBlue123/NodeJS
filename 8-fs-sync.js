//doc file dong bo
const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');

const second = readFileSync('./content/second.txt','utf8');

console.log(first);

writeFileSync('./content/result-sync.txt',`Here is the result ${first} and ${second}`);

console.log('1')