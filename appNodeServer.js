

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes  = require('./routes/shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
})
// app.use('/', (req, res, next) => {
//     console.log('in the middleware!');
//     next();
// });

// app.use((req, res, next) => {
//     // const value = 10
//     console.log('in another the middleware!');
//     // res.send('<h1> This is "Add Product" Page </h1>');
//     // res.send('{key1: value}');
//     // res.send( { key1: value } );
// });

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);