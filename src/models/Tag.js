const mongoose = require('mongoose');

const Tags = mongoose.model("Tags",
    new mongoose.Schema(
        { 
        title: String, require: true,
        comments: [ { type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment' }]

        })
);

module.exports = Tags;