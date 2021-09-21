const http=require('http');
const express=require('express');

const app=express();

//Place for middleware

app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware second')
    res.send('<h1>Hello from add product</h1>')
});

app.use('/',(req,res,next)=>{
    console.log('In the middleware second')
    res.send('<h1>Hello from express js</h1>')
});

// const server=http.createServer(app);
// server.listen(3000);
// is replaced with 
app.listen(3000);