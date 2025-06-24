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
const adminProductRoute = require("./routes/adminRoutes/products");
const womansProductRoute = require("./routes/womansProductRoute/products");
const mensProductRoute = require("./routes/mensProductRoute/products")
const ExpressError = require("./utillities/ExpressError");

// Middlewares
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", adminProductRoute);
app.use("/api/woman/products", womansProductRoute);
app.use("/api/man/products", mensProductRoute);

if (process.env.NODE_ENV === "production") {
  app.all("/*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
  });
}

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    console.log("🔥 Backend Error:", err); // Good for debugging
    res.status(statusCode).json({ error: message });
});

app.listen(PORT, () => {
    console.log(`Server is listing on PORT ${PORT}`)
})