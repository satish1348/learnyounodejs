const fs=require('fs');
var content=fs.readFileSync(process.argv[2]);
var lines=content.toString().split('\n').length-1;
console.log(lines);