const express = require('express')
const router= express.Router();
router.get('/',(req,res)=>{
  // res.send('<html><body><h2>Hi Express</h2></body></html>');
  res.sendFile('index.html', {root:'./'});

})
router.post("/submitdata",(req,res)=>{
  // res.send("Post Request")
  let fname = req.body.fname;
  let lname= req.body.lname;
  res.send("The full name is "+fname+" "+lname);
})
router.put("/updatedata",(req,res)=>{
  res.send("Put Request")
})
router.delete("/deletedata",(req,res)=>{
  res.send("Delete Request")
})


module.exports= router;