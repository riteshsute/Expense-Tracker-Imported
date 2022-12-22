const path = require('path');

const express = require('express');

const fs = require('fs')
// type="hidden"

const router = express.Router();

router.get('/message', (req, res, next) => {
    fs.readFile("username.txt", (err, data) => {
        if(err){
            console.log(err)
            data = 'NO Chats Exists'
        }
    res.sendFile(path.join(__dirname, '..', 'views', 'message.html'))
});
    })

    // `${data}`


router.post('/message', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, {flag: 'a'}, ((err) => {
        err ? console.log("Something Went Wrong") : res.redirect("/message")   
     }) )
    // data.push(`{${req.body.username}:${req.body.message}}`);
    // console.log("data");
    // console.log(`${req.body.username}:${req.body.message}`);
    // res.redirect('/'); 
})

module.exports = router;