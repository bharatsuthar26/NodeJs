const http=require('http');
const option = {
    hostname: 'jsonplaceholder.typicode.com',
    path:'/posts',
    PORT:'4000',
    method:'GET'
}

const req= http.request(option,(res)=>{
    let data= '';
    res.on('data',(d)=>{
        data+=d;

    })

    res.on('end',()=>{
        console.log('Body: ',JSON.parse(data));
    })
}).on("error",(err)=>{
    console.log("Error: "+err);
});
req.end();
console.log("it is running");