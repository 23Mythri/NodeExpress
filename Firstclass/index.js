const express=require('express')
const app=express();
const port=3000;
const path=require('path')

// Middleware Functions
// Built in middleware function
app.use(express.static('./public'))

// hiding the folder name from the user in the front end
app.use('/static',express.static('./files'))

// user defined middleware function
const getDate=(req,res,next)=>{
    console.log("this is first underdefin0z ed middleware");
    const date=Date.now()
    req.reqDate=date;
    next()
}
app.use(getDate)

const getMsg=(req,res,next)=>{
   console.log("this is the second user defined Middleware function");
   res.msg="Response object has been changed"
    next()
}
app.use(getMsg)

// using the user defined middleware
app.get('/getdate',(req,res)=>{
    res.send("hello world"+ new Date(req.reqDate))
})


app.get("/",(req,res)=>{
    res.send('this has come from express server')
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})

app.get('/data',(req,res)=>{
    res.sendFile(path.join(__dirname,'data/registration.html'))
})
app.get('/detail',(req,res)=>{
    res.send(`<h1>This is the Detail page</h1>
    <p>Current Date and time:${new Date(req.reqDate)}</p>
    <button onclick="alert('hello world')">Click</button>`)
})
app.get('/getMsg',(req,res)=>{
    res.send(res.msg)
})
app.listen(port,()=>{
    console.log(`the server is listening on port ${port}`);
})