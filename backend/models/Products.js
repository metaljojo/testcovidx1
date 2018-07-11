const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    products_owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceType: {
        type: String,
        required: true
    },
    type: {
        type: String
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