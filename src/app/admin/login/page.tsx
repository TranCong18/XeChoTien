// ✅ File: src/app/admin/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/services/adminService";

export default function LoginAdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginAdmin(email, password);
      localStorage.setItem("adminToken", res.token);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Đăng nhập thất bại");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow p-8 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập Admin</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
