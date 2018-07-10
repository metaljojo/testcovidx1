const express = require('express');
const router = express.Router();

// load Products Model
const Products = require('../../models/Products');

router.get('/', (req, res, next) => {
    Products.find().catch(next).then(result => res.send(result));
});

router.post('/add', (req, res) => {
    const newProduct = new Products({
        author: req.body.author,
        title: req.body.title,
        bike: req.body.bike,
        skis: req.body.skis,
        description: req.body.description,
        price: req.body.price,
        type: req.body.type,
        images: req.body.images,
        size: req.body.size,
        disc: req.body.disc
    });
    newProduct.save().then(product => {
        res.status(200).json({success: 'product added with success ', product})
    })
    .catch(err => {
        console.log(err);
        
        res.status(400).send('coudnt add the products')
    })
});

module.exports = router;