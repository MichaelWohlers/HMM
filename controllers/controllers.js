//const Item = require('../models/Item');
const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};

/*const itemList = async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    }catch(err){
        res.json({message:err});
    }
};
*/
module.exports.saySomething = saySomething;
//module.exports.itemList = itemList;