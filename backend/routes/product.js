const express = require("express");
const router = express.Router();
const productController = require("../controllers/product")
const multer = require("multer");
const {storage , cloudinary} = require("../cloud.config");
const upload = multer({storage})

// Retrive all Data
router.get("/", productController.getProducts);
// Create New Product
router.post("/new", upload.array('product_images', 5), productController.createProudct);

module.exports = router;