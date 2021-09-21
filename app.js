const express=require('express');

const app=express();
// app.use((req,res,next)=>{
//     console.log('from first middleware');
//     next();
// });

// app.use((req,res,next)=>{
//     console.log('from second middleware');
//     res.send('<h1>Hello second first middleware<h1/>')  
// });

app.use('/users',(req,res,next)=>{
    console.log('from users middleware');
    res.send('<h1>Hello users  middleware<h1/>')  
});

app.use('/',(req,res,next)=>{
    console.log('from first middleware');
    res.send('<h1>Hello first  middleware<h1/>')  
});

app.listen(3300);