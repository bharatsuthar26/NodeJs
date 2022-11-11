const express = require('express')
const app = express()
PORT= 4333;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
  // res.send('<html><body><h2>Hi Express</h2></body></html>');
  res.sendFile(__dirname+'/index.html');

})
app.post("/submitdata",(req,res)=>{
  // res.send("Post Request")
  let fname = req.body.fname;
  let lname= req.body.lname;
  res.send("The full name is "+fname+" "+lname);
})
app.put("/updatedata",(req,res)=>{
  res.send("Put Request")
})
app.delete("/deletedata",(req,res)=>{
  res.send("Delete Request")
})
app.listen(PORT, (err)=>{
  if(err){ throw err}
  else{
    console.log(`Server Work On ${PORT} `);
  }
})