const mongoose = require('mongoose');

const PcodeSchema = mongoose.Schema({
    pcode: {
        type: String,
        required: true
    },
    type: {
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

module.exports = mongoose.model('pcodes', PcodeSchema);
