// routes/productRoutes.js
const express = require("express");
const router = express.Router();

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

const { verifyToken } = require("../middleware/authMiddleware");
const upload = require("../middleware/multer"); // Thêm dòng này

// ✅ Tạo sản phẩm có upload ảnh
router.post("/", verifyToken, upload.single("image"), createProduct);

// ✅ Cập nhật sản phẩm
router.put("/:id", verifyToken, updateProduct);

// ✅ Xóa sản phẩm
router.delete("/:id", verifyToken, deleteProduct);

// ✅ Lấy tất cả sản phẩm
router.get("/", getAllProducts);

// ✅ Lấy sản phẩm theo ID
router.get("/:id", getProductById);

module.exports = router;
