const express=require('express');
const bodyParser=require('body-parser');
const path =require('path');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

//Place for middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// app.use('/',(req,res,next)=>{
//     console.log('In the middleware second')
//     res.send('<h1>Hello from express js</h1>')
// });

app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next)=>{
    //res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

// const server=http.createServer(app);
// server.listen(3000);
// is replaced with 
app.listen(3000);