const http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello from Node js Server')
}).listen(8000)