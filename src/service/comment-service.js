const Comment = require('../models/Artist');
const Album = require('../models/Album');
const Artist = require('../models/Artist');


module.exports = {
    findById(commentId, callback) {
        const newComment = new Comment({name: name});
        newComment.save().then(callback);
    },
    findAll(callback) {
        Comment.find().then(callback);
        // replace with async + await
    },
    async save(artistId, albumId ) {
        const artist = Artist.findById(artistId).populate()
    }
}
