const express = require('express');
const router = express.Router();

// load Products Model
const Products = require('../../models/Products');

router.get('/', (req, res, next) => {
    res.send('products works');
});

router.post('/add', (req, res) => {
    const newProduct = new Products({
        _id: req.body._id,
        title: req.body.title,
        author: req.body.author
    });
    newProduct.save().then(product => {
        res.status(200).json({success: 'product added with success ', product})
    })
    .catch(err => {
        res.status(400).send('coudnt add the products')
    })
});

module.exports = router;