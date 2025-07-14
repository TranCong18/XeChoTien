// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// server.js
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ Route sản phẩm
app.use("/api/products", require("./routes/productRoutes"));

app.use("/api/news", require("./routes/newsRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
