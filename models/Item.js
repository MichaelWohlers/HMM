const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemNumber: {
        type: String,
        required: false
    },
    tradeName: {
        type: String,
        required: false
    },
    supplier: {
        type: String,
        required: false
    },
    supplierPartNumber: {
        type: String,
        required: false
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('items', ItemSchema);