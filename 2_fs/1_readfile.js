const http= require('http');
const fs= require('fs');
const PORT= 8889;
const server=http.createServer((req,res)=>{
    fs.readFile('1_myfile.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    })

})
server.listen(PORT,()=>{
    console.log(`Work on port : ${PORT}`);
})