// controllers/authController.js
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

// Đăng ký Admin
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Email đã tồn tại" });

    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin tạo thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi đăng ký", error: err });
  }
};

// Đăng nhập Admin
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Admin không tồn tại" });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Sai mật khẩu" });

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi đăng nhập", error: err });
  }
};
