const mongoose = require('mongoose');

const hatSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    size: Number,
    color: String,
    description: String,
    price: Number,
});

module.exports = mongoose.model('Hat', hatSchema);