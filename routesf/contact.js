const express = require('express');

const path = require('path');

const fs = require('fs');

const router = express.Router();

// const rootDir = require('../util/path')

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

router.post('/contact', (req, res, next) => {
    console.log(req.body);
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, ((err) => {
        err ? console.log("Something Went Wrong login") : res.redirect("/success")   
     }) )
})


module.exports = router;