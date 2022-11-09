const http=require('http');
const  PORT=4000;
let server= http.createServer((req,res)=>{
    res.end(`<h1>Server Created!</h1>`)
})
server.listen(PORT,(err)=>{
    if(err){
        console.log("Something went wrong");

    }
    else{
        console.log(`Server Work on ${PORT}`);
    }
})
