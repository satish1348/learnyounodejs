const args=process.argv;
let total=0;
for(let i=2;i<args.length;i++){
    total+=parseInt(args[i]);
}
console.log(total);