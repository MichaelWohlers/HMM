const mongoose = require('mongoose');

const HcodeSchema = mongoose.Schema({
    hcode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    hazardClass: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('hcodes', HcodeSchema);
