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
    try {
        let newProduct = new Product({
            ...req.body,
        });

        if (req.files && req.files.length > 0) {
            newProduct.product_images = req.files.map((obj) => {
                return {
                    filename: obj.filename,
                    url: obj.path
                }
            });
        } else {
            res.status(400).json({
                success: false,
                message: "No Images for Product"
            })
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
                image: svdProduct.image
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        })
    }
}

module.exports.showProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error Occurred",
        })
    }
}

module.exports.updateProductField = async (req, res) => {
    try {
        let produdctToBeUpdated = await Product.findByIdAndUpdate(req.params.id, { ...req.body });
        res.status(200).json({
            success: true,
            data: produdctToBeUpdated
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Error Occurred"
        })
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully",
            data: product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error Occurred"
        })
    }
}