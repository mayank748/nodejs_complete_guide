const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const errorController = require('./controllers/error')

const app = express();

app.engine('hbs',
    expressHbs.engine({
        layoutsDir: "views/layout/",
        defaultLayout: "main-layout",
        extname: "hbs"
    })
);
//To use handler bars
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Error);

app.listen(3000);