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
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdD7G7FFg1UKZFXhyP45b4AvY-qKEFvfjj3w&s"
    }
});

const Product = model("Product", productSchema);
module.exports = Product;