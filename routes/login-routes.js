const express = require('express');
const passport = require('../config/passport')

const router = express.Router();

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});

router.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;
//https://www.googleapis.com/books/v1/volumes?q=war%20and%20peace

//https://www.googleapis.com/books/v1/volumes?q=search+terms
//AIzaSyDkhK1BjspVqapL0ukGSs6Pi512kuscCJc
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDkhK1BjspVqapL0ukGSs6Pi512kuscCJc