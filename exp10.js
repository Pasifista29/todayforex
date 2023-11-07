File system in Node.js
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'test');
const filepath = `${dirpath}/sample.txt`;

fs.writeFileSync(filepath,'This is the sample text file Created !!');

fs.readFile(filepath,'utf-8',(err,item) =>{
    console.log(item)
})

fs.appendFile(filepath,"To read and append something on these file",(err) => {
    if(!err) console.log("Sample.txt file is updated")
})

fs.rename(filepath,`${dirpath}/example.txt`,(err) =>{
    if(!err)console.log("Filename is updated")
})

fs.unlinkSync(`${dirpath}/example.txt`)

