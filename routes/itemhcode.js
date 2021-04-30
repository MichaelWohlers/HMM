const express = require('express');
const router = express.Router();
const Itemhcode = require('../models/Itemhcode');
//ROUTES
router.get('/', async (req, res) => {
    try{
        const test = await Itemhcode.find();
        res.json(test);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        itemId: req.body.itemId,
        HcodeId: req.body.HcodeId,
        

    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }  
    });

module.exports = router;