const path = require('path');
const express = require('express');
const rootDir = require('../util/Path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware second')
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', { pageTitle: 'add-product', path: '/admin/add-product' });
});

router.post('/add-product', (req, res, next) => {
    //console.log('In the product middleware');
    console.log(req.body);
    products.push({ title: req.body.title })
    res.redirect('/')
});

module.exports = { products, router };