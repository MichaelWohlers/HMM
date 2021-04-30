const mongoose = require('mongoose');

const ItemhcodeSchema = mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    hcodeId: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('itemHcodes', ItemhcodeSchema);
