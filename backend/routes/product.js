const express = require("express");
const router = express.Router();
const productController = require("../controllers/product")
const multer = require("multer");
const {storage , cloudinary} = require("../cloud.config");
const upload = multer({storage})
const { productValidationSchema } = require("../schema");
const ExpressError = require("../utillities/ExpressError");

const validateProduct = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body);

    if (error) {
        return next(new ExpressError(400, error.details[0].message))
    }

    next();
}

// Retrive all Data
router.get("/", productController.getProducts);
// Create New Product
router.post("/new",  upload.array('product_images', 5), validateProduct, productController.createProudct);

// Show Product in detail
router.get("/:id", productController.showProduct)

// Update Product Field
router.patch("/:id", productController.updateProductField)

// Delete Product
router.delete("/:id", productController.deleteProduct)

module.exports = router;