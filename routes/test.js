const express = require('express');
const router = express.Router();
const Test = require('../models/Test');
//ROUTES
router.get('/', async (req, res) => {
    try{
        const test = await Test.find();
        res.json(test);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }  
    });

module.exports = router;