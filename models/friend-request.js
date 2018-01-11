const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendRequestSchema = new Schema({
    to: Schema.Types.ObjectId
});

const FriendRequest = mongoose.model('friend-request', FriendRequestSchema);