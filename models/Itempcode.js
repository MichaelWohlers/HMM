const mongoose = require('mongoose');

const ItempcodeSchema = mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    PcodeId: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('itemPcodes', ItempcodeSchema);
