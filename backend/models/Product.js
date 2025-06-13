const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["Man" , "Woman"]
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