const express = require('express');

const path = require('path');

const app = express();

const loginRoutes = require('./routesf/login');

const messageRoutes  = require('./routesf/message');

const contactRoutes = require('./routesf/contact');

const successRoutes = require('./routesf/success');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);
app.use(messageRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(4000)