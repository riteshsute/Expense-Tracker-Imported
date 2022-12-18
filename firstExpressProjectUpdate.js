const express = require('express');

const app = express();

const loginRoutes = require('./routesf/login');

const messageRoutes  = require('./routesf/message');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);
app.use(messageRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(4000)