const Product = require("../../models/Product");
const wrapAsync = require("../../utillities/wrapAsync");
const ExpressError = require("../../utillities/ExpressError")

module.exports.getProducts = wrapAsync(async (req, res, next) => {
    const allProducts = await Product.find();
    res.status(200).json({
        success: true,
        message: "All Products",
        data: [...allProducts],
    });
    res.status(500).json({
        success: false,
        message: "Server Error Occurred",
    });
});



module.exports.createProudct = wrapAsync(async (req, res, next) => {
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
        next(new ExpressError(400, "Send atleast a Image for product"))
    }

    let svdProduct = await newProduct.save();

    return res.status(200).json({
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
