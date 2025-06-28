const express = require("express");
const router = express.Router();
const adminProductController = require("../../controllers/adminControllers/products")
const multer = require("multer");
const {storage , cloudinary} = require("../../cloud.config");
const upload = multer({storage})
const { productValidationSchema } = require("../../schema");
const ExpressError = require("../../utillities/ExpressError");

const validateProduct = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body);

    if (error) {
        return next(new ExpressError(400, error.details[0].message))
    }

    next();
}

// Retrive all Data
router.get("/", adminProductController.getProducts);

// Create New Product
router.post("/new",  upload.array('product_images', 5), validateProduct, adminProductController.createProudct);

// Show Product in detail
router.get("/:id", adminProductController.showProduct)

// Update Product Field
router.patch("/:id", adminProductController.updateProductField)

// Get The Product We Want to Update
router.get("/:id", adminProductController.productToBeUpdated)

// Update Product
router.put("/:id", adminProductController.updateProduct)

// Delete Product
router.delete("/:id", adminProductController.deleteProduct)

module.exports = router;