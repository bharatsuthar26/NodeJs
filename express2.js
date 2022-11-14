const express=require('express');//import module 
const app=express();//create instance of express 
const PORT=7788;
app.use(express.json());//parse form data
app.use(express.urlencoded({extended:false}));//encoded it 
app.use(express.static(__dirname+'/images'));
//define the routes here 
const mainRoutes=require('./routes/mainRoutes');
const adminRoutes=require('./routes/adminRoutes');
const userRoutes=require('./routes/usersRoutes');
app.use('/',mainRoutes);
app.use('/admin',adminRoutes);
app.use('/users',userRoutes);
//Handling non matching request from the client 
app.use((req,res,next)=>{
    res.status(404).send("<h1> Page not found</h1>");
})
app.listen(PORT,(err)=>{
    if(err){ throw err}
    else{
        console.log(`Server work on ${PORT}`)
    }
})