const mongoose = require('mongoose')

const Book = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Books', Book)