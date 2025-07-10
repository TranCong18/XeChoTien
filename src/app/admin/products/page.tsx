"use client";

import { useState } from "react";
import { products as mockProducts, categories } from "@/data/products";

export default function AdminProducts() {
  const [productList, setProductList] = useState(mockProducts);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleDelete = (id: number) => {
    setProductList(productList.filter((p) => p.id !== id));
  };

  const handleEdit = (product: any) => {
    setEditProduct(product);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditProduct(null);
    setShowForm(true);
  };

  const handleFormSubmit = (product: any) => {
    if (product.id) {
      setProductList(productList.map((p) => (p.id === product.id ? product : p)));
    } else {
      setProductList([
        ...productList,
        { ...product, id: Date.now() },
      ]);
    }
    setShowForm(false);
  };

  return (
    <>
      <section className="mb-8">
        <div className="bg-gradient-to-r from-[#b8001c] to-[#1a1a1a] text-white rounded-3xl shadow-xl p-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold uppercase tracking-wide drop-shadow">Quản lý sản phẩm</h1>
          <button
            onClick={handleAdd}
            className="bg-white text-[#b8001c] font-bold px-6 py-2 rounded-xl shadow hover:bg-[#b8001c] hover:text-white transition"
          >
            + Thêm sản phẩm
          </button>
        </div>
      </section>
      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-[#b8001c] text-lg">
              <th className="py-2 px-3">Tên sản phẩm</th>
              <th className="py-2 px-3">Hãng</th>
              <th className="py-2 px-3">Giá</th>
              <th className="py-2 px-3">Mô tả</th>
              <th className="py-2 px-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3 font- text-black">{p.name}</td>
                <td className="py-2 px-3 text-black">{p.category}</td>
                <td className="py-2 px-3 text-black">{p.price}</td>
                <td className="py-2 px-3 max-w-xs truncate text-black">{p.desc}</td>
                <td className="py-2 px-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 rounded bg-[#b8001c] text-white font-bold hover:bg-black transition"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 rounded bg-gray-200 text-[#b8001c] font-bold hover:bg-red-100 transition"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {showForm && (
        <ProductForm
          product={editProduct}
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
  </>
  );
}

function ProductForm({ product, onClose, onSubmit }: any) {
  const [form, setForm] = useState(
    product || { name: "", category: categories[0], price: "", desc: "" }
  );
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#b8001c]">
          {product ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        </h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(form);
          }}
          className="space-y-4"
        >
          <input
            className="w-full border p-3 rounded-xl text-lg"
            placeholder="Tên sản phẩm"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <select
            className="w-full border p-3 rounded-xl text-lg"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            className="w-full border p-3 rounded-xl text-lg"
            placeholder="Giá"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            required
          />
          <textarea
            className="w-full border p-3 rounded-xl text-lg"
            placeholder="Mô tả"
            value={form.desc}
            onChange={e => setForm({ ...form, desc: e.target.value })}
            rows={3}
          />
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-[#b8001c] text-white font-bold py-3 rounded-xl hover:bg-black transition"
            >
              {product ? "Cập nhật" : "Thêm mới"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-[#b8001c] font-bold py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Huỷ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
