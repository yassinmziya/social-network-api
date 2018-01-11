const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        type: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        },
        children: {
            type: [String],
            default: []
        }
    }
);

var Post = mongoose.model('post', PostSchema);

module.exports = Post;