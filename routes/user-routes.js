// localhost:3000/api/v1/user
const express = require('express');
const router = express.Router(); // rememenr to CONSTRUCT the router
const User = require('../models/user');

// all users
router.get('/', function(req, res) {
    User.find({}).then(function(result) {
        res.send(result);
    });
});

// new user
router.post('/', function(req, res) {
    var data = req.body;
    var user = new User(data);
    user.save().then(function(result) {
        res.send(result);
    });
});

module.exports = router;