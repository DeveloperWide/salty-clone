const express = require("express");
const router = express.Router();
const productController = require("../controllers/product")

// Retrive all Data
router.get("/", productController.getProducts);

module.exports = router;