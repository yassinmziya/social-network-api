const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    first: String,
    last: String,
    friends: [Schema.Types.ObjectId]
});

var User = mongoose.model('user', UserSchema);

module.exports = User;