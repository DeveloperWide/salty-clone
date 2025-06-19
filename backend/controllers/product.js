const Product = require("../models/Product");
const { productValidationSchema } = require("../schema");
const wrapAsync = require("../utillities/wrapAsync");
const ExpressError = require("../utillities/ExpressError")

module.exports.getProducts = wrapAsync(async (req, res, next) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            success: true,
            message: "All Products",
            data: [...allProducts],
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        });
    }
});

// const {error, value} = productValidationSchema.validate(req.body);
// console.log(error, "....." , value)

module.exports.createProudct = wrapAsync(async (req, res, next) => {
    try {
        let newProduct = new Product({
            ...req.body,
        });

        if (req.files && req.files.length > 0) {
            newProduct.product_images = req.files.map((obj) => {
                return {
                    filename: obj.filename,
                    url: obj.path,
                };
            });
        } else {
            next(new ExpressError("Send atleast a Image for product", 400))
        }

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
                image: svdProduct.image,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        });
    }
});

module.exports.showProduct = wrapAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        });
    }
});

module.exports.updateProductField = wrapAsync(async (req, res, next) => {
    try {
        let produdctToBeUpdated = await Product.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });
        res.status(200).json({
            success: true,
            data: produdctToBeUpdated,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error Occurred",
        });
    }
});

module.exports.deleteProduct = wrapAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            data: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        });
    }
});
