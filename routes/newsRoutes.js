// routes/newsRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createNews } = require("../controllers/newsController");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), createNews);

module.exports = router;
