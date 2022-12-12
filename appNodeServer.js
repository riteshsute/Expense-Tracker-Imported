

const express = require('express');

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//     console.log('in the middleware!');
//     next();
// });

app.use('/add-product', (req, res, next) => {
    // const value = 10
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</form>');
    // res.send('{key1: value}');
    // res.send( { key1: value } );
 
});

app.use('/size', (req, res, next) => {
    // const value = 10
    res.send('<form action="/size" method="post"><input type="number" name="size"><button type="submit">Add Size</form>');
    // res.send('{key1: value}');
    // res.send( { key1: value } );
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
})

app.post('/size', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1> This is "Main" Page </h1>');
});

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