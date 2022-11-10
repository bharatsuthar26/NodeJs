const fs= require('fs');
fs.readFile('crud.txt',(err,data)=>{
    debugger;
    if(err) throw err;
    console.log(data);
})