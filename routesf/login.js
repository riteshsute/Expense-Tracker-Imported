const express = require('express');

const fs = require('fs');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST"><input id="username" type="text" name="username"><button type="submit">Login</button></form>`);
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, ((err) => {
        err ? console.log("Something Went Wrong login") : res.redirect("/message")   
     }) )
})


module.exports = router;