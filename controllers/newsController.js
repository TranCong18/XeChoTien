// controllers/newsController.js
const News = require("../models/News");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.createNews = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Upload ảnh lên Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { folder: "news" },
      async (error, result) => {
        if (error)
          return res.status(500).json({ error: "Upload ảnh thất bại" });

        const news = new News({
          title,
          description,
          image: result.secure_url,
        });

        await news.save();
        res.status(201).json({ message: "Tạo tin tức thành công", news });
      }
    );

    req.file && req.file.buffer && result.end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi tạo tin tức" });
  }
};
