const fs = require("fs");
const testmodule = require('./test1')

//copies content from 1 to 2.
fs.copyFileSync("file1.txt", "file2.txt")

//works like ls in CLI. 
const listInhere = fs.readdirSync('./');
console.log({listInhere});

//Synchronous methods must be avoided->use async functions.
const list2 = fs.readdir('/',(err,file)=>{
    if(err){
        console.log('Error Occurred:',err);
        return
    }
    console.log('Result in my home dire', file)
})
testmodule()
