const express= require('require');
const app = express();
const PORT = 5000;
const hbs= require('hbs');
app.set('viewengine','hbs');
app.set('views','./views');

let data= {
    name: 'Bharat',
    age: 22
}
app.get("/", (req,res)=>{
    res.render('home.hbs',{demo:data});
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server works on ${PORT}`);
})