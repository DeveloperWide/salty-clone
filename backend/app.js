const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { connectDb } = require("./config/db");

connectDb().then(() => {
    console.log(`Connected to Db`)
}).catch((err) => {
    console.log(`Error while connecting with Database`, err)
})

app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/api/home" , (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World!",
    })
});

// 

app.listen(PORT, () => {
    console.log(`Server is listing on PORT ${PORT}`)
})