const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        min: 99,
        required: true
    },
    offerPrice:{
        type: Number,
        min: 1,
    },
    gender: {
        type: String,
        enum: ["Man", "Woman" , "Other"]
    },
    category: {
        type: String,
        enum: ["Earrings",
            "Necklaces",
            "Rings",
            "Jewellery Sets",
            "Bracelets",
            "Gift Boxes",
            "Couple Sets",
            "Sunglasses",
            "Hats & Caps",
            "Hair Accessories"]
    },
    inStock: {
        type: Boolean,
        default: true,
        required: true
    },
    product_images: [
        {
            filename: {
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            },
            _id: false
        }
    ]
});

const Product = model("Product", productSchema);
module.exports = Product;