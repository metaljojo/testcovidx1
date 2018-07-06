const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    // images: {
    //     data: Buffer,
    //     contentType: String
    // },
    // author: [
    //     {
    //         name: {
    //             type: String
    //         },
    //         email: {
    //             type: String
    //         }
    //     }
    // ],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Products = mongoose.model('products', ProductsSchema);