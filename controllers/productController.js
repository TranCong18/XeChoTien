// controllers/productController.js
const Product = require("../models/Product");
const cloudinary = require("../utils/cloudinary");

exports.createProduct = async (req, res) => {
  try {
    const { name, category, seats, transmission, fuel, desc } = req.body;

    // Upload ảnh lên Cloudinary nếu có ảnh
    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products",
      });
      imageUrl = result.secure_url;
    }

    const product = new Product({
      name,
      category,

      seats,
      transmission,
      fuel,
      desc,
      image: imageUrl,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo sản phẩm", error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật sản phẩm", error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa sản phẩm" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa sản phẩm", error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách sản phẩm", error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy sản phẩm theo ID", error: err.message });
  }
};
