const mongoose = require("mongoose");
const Product = require("../models/Product");
const products = require("./data");



const connectDb = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/salty")
}

connectDb().then(() => {
    console.log(`Successfully Connected to Db`)
}).catch((err) => {
    console.log(`Error`, err)
})

const initDb = async () => {
    await Product.deleteMany({});
   let allProducts = await Product.insertMany(products);
   console.log(allProducts)
}

initDb()