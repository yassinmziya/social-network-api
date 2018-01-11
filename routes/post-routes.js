// localhost:3000/api/v1/user
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// all posts - not comments
router.get('/', function(req, res) {
    Post.find().then(function(result) {
        var posts = result.filter(post => post.type === "POST");
        res.send(posts);
    });
})

// new post
router.post('/', function(req, res) {
    var post = new Post(req.body);
    post.save().then(function(result) {
        res.send(result);
    });
});

// new comment responding to post with :id
router.post('/:id', function(req, res) {
    Post.findById(req.params.id).then(function(parent) {
        var comment = new Post(req.body);
        comment.save().then(function(result) {
            parent.children.push(result._id);
            Post.findByIdAndUpdate(req.params.id, parent).then(function() {
                res.send(result);
            })
        });
    });
});

module.exports = router;