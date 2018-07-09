const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    products_owner_id: {
        type: Schema.Types.ObjectId
    },
    author: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String]
    },
    properties: { 
        size: {
            type: String
        },
        disc: {
            type: String
        } 
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Products = mongoose.model('products', ProductsSchema);