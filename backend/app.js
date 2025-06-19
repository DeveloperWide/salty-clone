const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { connectDb } = require("./config/db");
const dotenv = require("dotenv").config();

connectDb().then(() => {
    console.log(`Connected to Db`)
}).catch((err) => {
    console.log(`Error while connecting with Database`, err)
})



// Routes
const productRoutes = require("./routes/product");
const ExpressError = require("./utillities/ExpressError");

// Middlewares
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.all("/*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
  });
}
app.use((err, req, res, next) => {
    let { error = "Serve Error Occurred", statusCode = 500 } = err;
    res.status(statusCode).json({ error })
})

app.listen(PORT, () => {
    console.log(`Server is listing on PORT ${PORT}`)
})