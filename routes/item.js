const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

//ROUTES
router.get('/', async (req, res) => {
    try{
        const item = await Item.find();
        res.json(item);
    }catch(err){
        res.json({message:err});
    }
});



router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Item({
        itemNumber: req.body.itemNumber,
        tradeName: req.body.tradeName,
        supplier: req.body.supplier,
        supplierPartNumber: req.body.supplierPartNumber
    });

    try{
    const savedItem= await post.save();
    res.json(savedItem);
    }catch(err){
        res.json({message: err});
    }  
    });

module.exports = router;