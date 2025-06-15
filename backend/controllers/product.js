const Product = require("../models/Product");

module.exports.getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            success: true,
            message: "All Products",
            data: allProducts
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        })
    }
}

module.exports.createProudct = async (req, res) => {
    console.log(req.files)
    try {
        let newProduct = new Product({
            ...req.body
        });
        let svdProduct = await newProduct.save();
        console.log(svdProduct);
        res.status(200).json({
            success: true,
            message: "Product Successfully Created",
            data: {
                _id: svdProduct._id,
                title: svdProduct.title,
                description: svdProduct.description,
                gender: svdProduct.gender,
                category: svdProduct.category,
                productPrice: svdProduct.productPrice,
                offerPrice: svdProduct.offerPrice,
                image: svdProduct.image
            }
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        })
    }
}