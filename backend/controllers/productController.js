const Product = require('../models/product')

//Create new product => /api/v1/product/new

exports.newProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success:true,
            product
        });
    } catch (error) {
        next(error);
    }
}

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success:true,
        message: 'Get all products in database'
    })
}

