const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    age: Number,
    address: String,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model("details", detailSchema);