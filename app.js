const {readFile} = require('fs');

console.log('started a first task');

readFile('./content/first.txt','utf8',(err,data)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);
    console.log('completed a first task');
});
console.log('starting next task');
