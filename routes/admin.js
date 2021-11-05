const express = require('express');
const path=require('path');
const rootDir=require('../util/Path');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware second')
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>')
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    //console.log('In the product middleware');
    console.log(req.body);
    res.redirect('/')
});


module.exports = router;