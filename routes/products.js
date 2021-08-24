const express = require("express");
const router = express.Router();

//importing middlewares
const authenticateToken = require('../middlewares/authenticateToken');



//import models;
const Product = require('../models/product');


////////////////////handling requests///////////////////////////

//creating product

router.post('/create', authenticateToken, async (req, res) => {
    try {
        product = new Product({

            'title': req.body.title,
            'ownerId': req.user.user_id,
            'imgSrc': req.body.imgSrc,
            'price': req.body.price,

            'description': req.body.description,
            'category':req.body.category,
            'inStock': req.body.inStock,


        });

        await product.save();
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed");
    }
});


//getting all the products(new to old)

router.get('/all', authenticateToken, async (req, res) => {
    try {
        products = await Product.find().sort([['updatedAt', -1]]);
        if (products.length > 0) {


            return res.status(200).json(products);

        } else {
            return res.status(200).json([]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed");
    }
});

// getting single product

router.get('/:product_id', authenticateToken, async (req, res) => {


    Product.find({ "_id": req.params.product_id })
        .then(result => res.status(200).json(result))
        .catch(error => {
            console.log(error);
            res.status(500).send("Failed");
        })


})

//getting all the products by the owner

router.get('/user/:user_id', authenticateToken, async (req, res) => {

    Product.find({ "ownerId": req.params.user_id }).sort([['updatedAt', -1]])
        .then(result => res.status(200).json(result))
        .catch(error => {
            console.log(error);
            res.status(500).send("Failed");
        });
})


//getting products by category

router.get("/category/:category",authenticateToken,async(req,res)=>{

    Product.find({ "category": req.params.category,"inStock":true}).sort([['updatedAt', -1]])
        .then(result => res.status(200).json(result))
        .catch(error => {
            console.log(error);
            res.status(500).send("Failed");
        });
})



//updating a product 
router.put('/update/:product_id', authenticateToken, async (req, res) => {


    try {



        await Product.updateOne({ _id:req.params.product_id}, { $set: req.body });
        return res.status(201).send("product updated successfully");


    } catch (error) {
        console.log(error);
        res.status(500).send("Failed");
    }
})

//deleting a product
router.delete('/update/:product_id',authenticateToken,async(req,res)=>{
    try{
        await Product.deleteOne({_id:req.params.product_id})
        return res.status(201).send("product deleted successfully");
    }catch(error){
        console.log(error);
        res.status(500).send("Failed");
    }
})


module.exports = router;