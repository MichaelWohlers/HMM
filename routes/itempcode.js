const express = require('express');
const router = express.Router();
const Itempcode = require('../models/Itempcode');
//ROUTES
router.get('/', async (req, res) => {
    try{
        const test = await Itempcode.find();
        res.json(test);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        itemId: req.body.itemId,
        pcodeId: req.body.pcodeId,
        

    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }  
    });

module.exports = router;