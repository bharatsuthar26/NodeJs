const express = require('express');
const PORT = 5000;
const app= express();
app.set('view engine', 'pug');
app.set('views','./views');

app.get("/", (req,res)=>{
    res.render('first_view', {title:"NeoSOFT", message: "Express Js Template Engine", user:{name:"Bharat", age: 22}})
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server works on ${PORT}`);
})
app.get("/product", (req,res)=>{
    res.send("Product Page")
})