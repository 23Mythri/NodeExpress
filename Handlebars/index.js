const express=require('express');
const exphbs=require('express-handlebars');
const port=2000;


const app=express();

app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    const person={
        name:"mythri",
        id:101
    }
    res.render('./home.handlebars',{person})
})

app.get('/about',(req,res)=>{

    const persons=[
        {
        name:"mythri",
        id:"101",
        role:"developer"
    },
    {
        name:"pavi",
        id:"102",
        role:"developer"
    },
    {
        name:"chandu",
        id:"103",
        role:"developer"
    },
]
  res.render('./about.handlebars',{persons})

})

app.get('/contact',(req,res)=>{
    const users=['harsha','jerusha','savanth','praveen']
    res.render('./contact.handlebars',{users})
})


app.listen(port,()=>{
    console.log(`this server is listening on port ${port}`);
})