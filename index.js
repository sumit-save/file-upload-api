const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Routes
const uploadsRoutes = require("./routes/uploads");
app.use("/uploads", uploadsRoutes);

// Create Database Connection with MongoDB
(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("MongoDB Database Connected Successfully");
    } catch (error) {
        console.log("Unable To Connect MongoDB Database");
        console.log(error);
    }
})();

// Create Server On Localhost:8000
(async () => {
    try {
        await app.listen(PORT);
        console.log(`Server Created On Localhost:${PORT}`);
    } catch (error) {
        console.log("Unable To Create Server On Localhost:8000");
        console.log(error);
    }
})();