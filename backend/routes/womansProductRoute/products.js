const express = require("express");
const Product = require("../../models/Product");
const router = express.Router();


router.get("/", async (req, res) => {
     const allProducts = await Product.find({gender: "Woman"});
     res.status(200).json({
        message: "All Woman Products",
        data: [...allProducts]
     })
});

module.exports = router;