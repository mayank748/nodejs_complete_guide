const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

//Place for middleware
app.use(bodyParser.urlencoded({extended:false}));

// app.use('/',(req,res,next)=>{
//     console.log('In the middleware second')
//     res.send('<h1>Hello from express js</h1>')
// });

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
});

// const server=http.createServer(app);
// server.listen(3000);
// is replaced with 
app.listen(3000);