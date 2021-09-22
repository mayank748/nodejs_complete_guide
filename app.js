const express=require('express');
const bodyParser=require('body-parser');

const app=express();

//Place for middleware
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware second')
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log('In the product middleware');
    console.log(req.body);
    res.redirect('/')
});

app.use('/',(req,res,next)=>{
    console.log('In the middleware second')
    res.send('<h1>Hello from express js</h1>')
});

// const server=http.createServer(app);
// server.listen(3000);
// is replaced with 
app.listen(3000);