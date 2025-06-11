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
    /* gender: {
        type: String,
        snum: ["man" , "woman"]
    }, */
    image: {
        type: String,
    }
});

const Product = model("Product", productSchema);
module.exports = Product;