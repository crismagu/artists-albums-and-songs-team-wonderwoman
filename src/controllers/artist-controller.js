const Artist = require('../models/Artist');
const artistService = require('../service/artist-service');

class ArtistController {
    
    static async addNewArtist(req, res) {
        try {
            console.log(req.body)
            // const artist = {name:req.body.name}
            const newArtist = await artistService.save({name: req.body.name});
            res.json({newArtist})
        } catch (error) {
            res.json({error});
        }
    }

    static async findAll(req, res) {
        try {
            const artists = await artistService.findAll()
            res.json({artists})
        } catch (error) {
            res.json({error})
        }
    }

    static async findArtistById(req, res) {
        try {
            const { id } = req.body;
            const foundArtist = await artistService.findById(id);
            res.json({foundArtist})
        } catch (error) {
            res.json({error});
        }
    } 
    static async artistUpdate(req, res){
        try {
            const artistId = req.params.id;
            const updatedArtist = await artistService.updateArtist(artistId, req.body);
            res.json({updatedArtist});
        } catch (error) {
            res.json(error);
        }

        // Working Code
        // try{
        //     const artistId = req.params.id;
        //     const artistToUpdate = await artistService.updateArtist(artistId);
        //     artistToUpdate.name = req.body.name
        //     console.log(artistToUpdate)
        //     const result = await artistToUpdate.save();
        //     res.json(result)
        // }
        // catch(err){
        //     res.json({message:err.message})
        // }
        // End Working Code

        // try{
        //     const artistId = req.params.id;
        //     if(req.body.name != null){
        //         const artistUpdates = { name: req.body.name}
        //         const artistToChange = await artistService.updateArtist(artistId, artistUpdates)
        //         res.json(await artistToChange.save())
        //     } else {
        //         res.json({message: "Nope"})
        //     }
        // }catch(err){
        //     res.json({message: err.message})
        // }
       
            // const artistName = req.body.name;
            // if(artistName != null){
            //     artistToUpdate.name = artistName;
            // }else{
            //     res.json("NO")
            // }

        
    }
};

module.exports = ArtistController;