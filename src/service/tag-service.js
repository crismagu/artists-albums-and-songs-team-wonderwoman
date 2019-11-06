const Comment = require('../models/Comment');
const Tag = require("../models/Tag");
const mongoose = require('mongoose');

module.exports = {
    async addTag(tag) {
        try {
            const newTag = new Tag(tag)
            await newTag.save();
            return newTag;
        } catch (err) {
            return err;
        }

    },
    async deleteTag(tagId, commentId){
        const commentTag = await Comment.findById(commentId); 
        await commentTag.tags.pull({_id: tagId})
        await commentTag.save();
        const tagToDelete = await Tag.findByIdAndRemove(tagId);
        return tagToDelete;
    }, 

    async allTags(){
        const renderTags = await Tag.find().populate("comments").exec();
        return renderTags;
    }, 
    async findTag(tagId){
        const tag = await Tag.findById(tagId);
        await tag.populate("comments").exec();
        return tag;
    }, 
    async updateTag(tagId, tagUpdates){
        const updatedTag= await Tag.findByIdAndUpdate(tagId, tagUpdates, {new: true});
        return updatedTag;
    }, 
    // async deleteTags(tagId){
    //     const tagToDelete = await Tag.findById(tagId)
    //     const removed = tagToDelete.comments;
    //     const newArry = [];
    //     removed.forEach(item => {
    //         newArry.push(mongoose.Types.ObjectId(item));    
    //     });
    //     newArry.forEach(item =>{
    //         let cId = Comment.findById(item);
    //         await cId.tags.pull({_id: item });

    //     })
    //     const result = newArry
    //     return result;
    // }

}
