const express = require('express');
const router = express.Router();

// load Products Model
const Products = require('../../models/Products');

router.get('/', (req, res, next) => {
    Products.find().catch(next).then(result => res.send(result));
});

router.post('/add', (req, res) => {
    const profileFields = {};
    profileFields.properties = {};
    profileFields.properties.size = req.body.size;
    profileFields.properties.disc = req.body.disc;
    profileFields.category = req.body.category;
    profileFields.author = req.body.author;
    profileFields.title = req.body.title;
    profileFields.description = req.body.description;
    profileFields.price = req.body.price;
    profileFields.type = req.body.type;
    profileFields.images = req.body.images;

    new Products(profileFields).save()
        .then(product => res.status(200).json({success: 'product added with success ', product}))
        .catch(err => res.status(400).send('coudnt add the products'));
    
    // const newProduct = new Products({
    //     author: req.body.author,
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     type: req.body.type,
    //     images: req.body.images
    // });
    // newProduct.save().then(product => {
    //     res.status(200).json({success: 'product added with success ', product})
    // })
    // .catch(err => {
    //     console.log(err);
        
    //     res.status(400).send('coudnt add the products')
    // })
});

module.exports = router;