const path = require('path');

const fs = require('fs');

exports.getContactDetails = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
}

exports.postContactDetails = (req, res, next) => {
    console.log(req.body);
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, ((err) => {
        err ? console.log("Something Went Wrong login") : res.redirect("/success")   
     }) )
}

exports.getSuccessMessage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'success.html'))
}

exports.postSuccessMessage = (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    }

