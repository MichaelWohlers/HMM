const express = require('express');
const router = express.Router();
const Pcode = require('../models/Pcode');
//ROUTES
router.get('/', async (req, res) => {
    try{
        const test = await Pcode.find();
        res.json(test);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        pcode: req.body.pcode,
        type: req.body.type,
        statement: req.body.statement

    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }  
    });

module.exports = router;