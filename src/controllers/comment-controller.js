const Comment = require('../models/Comment');
const commentService = require('../service/comment-service');

module.exports = {
    async addNewComment(req, res) {
        try {
            const { title, songId } = req.body;
            const tag = {title: title};
            const newComment = await tagService.addTag(tag, songId);
            res.json(newComment); 
        } catch(err) {
            console.log(err)
            res.json({message: err.message});
        }    
    },

    async tagUpdate(req, res) {
        try {
            const tagId = req.params.id;
            const updatedComment = await tagService.updateComment(tagId, req.body);
            res.json({updatedComment});
        }   catch {
            res.json({error});
        }
    },

    async deleteOne(req, res){
        try {
            const songId = req.params.id;
            const tagId = req.body.id;
            const deletedTag = await tagService.deleteTag(tagId, songId);
            res.json({deletedTag});
        } catch(error) {
            res.json({message: error.message});
        }
    },

    async findOne(req, res){
        try {
            const tagId = req.params.id;
            const requestedTag = await tagService.findTag(tagId);
            res.json({requestedTag});
        } catch {
            res.json({error});
        }
    },

    async getAllTags(req, res) {
        try {
            const allTags = await tagService.findAll();
            res.json({allTags});
        } catch {
            res.json({error});
        }
    }, 
};