//doc file dont dong bo
const {readFile,writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, data) => {
    console.log('Reading file ' + 'first.txt');
    if (err) {
        console.error(err);
        return;
    }
    const first = data;
    console.log(3);
    readFile('./content/second.txt', 'utf8', (err, data) => {
        console.log('Reading file ' + 'second.txt');
        if (err) {
            console.error(err);
            return;
        }
        const second = data;
        console.log(4);
        writeFile('./content/result-async.txt',`Here is result ${first} AND ${second} `, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data)
            console.log(5);
            console.log('Write successfully.');
        })
    })
})
console.log('1');
console.log('2');