// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Kết nối MongoDB thành công");
  } catch (error) {
    console.error("❌ Kết nối thất bại:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
