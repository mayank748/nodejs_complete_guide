const http=require('http');
const express=require('express');

const app=express();

//Place for middleware
app.use((req,res,next)=>{
    console.log('In the middleware first')
    next();//Allows the middleware to continue to the next middleware in line
});

app.use((req,res,next)=>{
    console.log('In the middleware second')
});

const server=http.createServer(app);
server.listen(3000);