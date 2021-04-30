const express = require('express');
const router = express.Router();
const Hcode = require('../models/Hcode');
//ROUTES
router.get('/', async (req, res) => {
    try{
        const test = await Hcode.find();
        res.json(test);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        hcode: req.body.hcode,
        type: req.body.type,
        category: req.body.category,
        hazardClass: req.body.hazardClass,
        statement: req.body.statement,

    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }  
    });

module.exports = router;