const mongoose = require('mongoose');

const Comment = mongoose.model("Comment",
    new mongoose.Schema(
        { 
        title: String,
        body: String
        })
);

module.exports = Comment;