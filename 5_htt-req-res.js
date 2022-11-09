const http=require('http');
const  PORT=4000;
let server= http.createServer((req,res)=>{
    if(req.url=="/"){
        //set response header
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Default Page</h2> </body></html>');
        res.end();

    }
    else if(req.url=="/user"){
                //set response header

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(JSON.stringify({fname:'Bharat', lname: 'Suthar', age: 19}));
        res.end();

    }
    else if(req.url=="/admin"){
                //set response header

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Admin Page</h2> </body></html>');
        res.end();

    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Page not found</h2> </body></html>');
        res.end();
    }
}).listen(PORT)
console.log("server chal raha hai");
    
    

