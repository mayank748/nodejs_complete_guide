const products = [];

exports.getAddProduct = (req, res, next) => {
    console.log('In the middleware second')
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', { pageTitle: 'add-product', path: '/admin/add-product', activeAddProduct: true, activeShop: false });
}

exports.postAddProduct = (req, res, next) => {
    //console.log('In the product middleware');
    console.log(req.body);
    products.push({ title: req.body.title })
    res.redirect('/')
}

exports.getProduct = (req, res, next) => {
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/shop', hasProduct: products.length > 0, activeShop: true, activeAddProduct: false })
}