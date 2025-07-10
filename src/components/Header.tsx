// File: src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProductDropdown = () =>
    setIsProductDropdownOpen(!isProductDropdownOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Navigation Split */}
        <div className="hidden md:flex flex-1 justify-start items-center gap-8 text-sm text-black relative">
          <Link href="/about" className="hover:text-red-600">
            Về Kia
          </Link>
          <div className="relative">
            <button
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
              className="hover:text-red-600 flex items-center gap-1 h-[72px]"
              style={{ height: "72px", alignItems: "center", display: "flex" }}
            >
              Sản phẩm
              <svg
                className={`w-4 h-4 transition-transform ${
                  isProductDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductDropdownOpen && (
              <div
                className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 rounded-b-md py-2 min-w-[200px] z-50"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
                style={{ marginTop: 0 }}
              >
                <Link
                  href="/features"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                >
                  Ưu điểm nổi bật
                </Link>
                <Link
                  href="#main-products"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                >
                  Sản phẩm chính
                </Link>
              </div>
            )}
          </div>
          <Link href="#new-carnival" className="relative hover:text-red-600">
            New Carnival
            <span className="absolute -top-2 -right-6 text-[10px] text-red-600 font-bold">
              NEW
            </span>
          </Link>
          <Link href="#connect" className="hover:text-red-600">
            Kia Connect
          </Link>
        </div>

        {/* Logo center */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/test2-removebg-preview.png"
            alt="KIA Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Right side nav */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8 text-sm text-black">
          <Link href="#price" className="hover:text-red-600">
            Giá xe
          </Link>
          <Link href="/news" className="hover:text-red-600">
            Tin tức và ưu đãi
          </Link>
          <Link href="#service" className="hover:text-red-600">
            Dịch vụ
          </Link>
          <Link href="#dealers" className="hover:text-red-600">
            Đại lý
          </Link>
          <Link href="#contact" className="hover:text-red-600">
            Liên hệ
          </Link>
          <button aria-label="Search">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-sm font-medium text-black">
          <Link href="/about" className="block hover:text-red-600">
            Về Kia
          </Link>
          <div>
            <button
              onClick={toggleProductDropdown}
              className="flex items-center justify-between w-full hover:text-red-600"
            >
              Sản phẩm
              <svg
                className={`w-4 h-4 transition-transform ${
                  isProductDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/features" className="block hover:text-red-600">
                  Ưu điểm nổi bật
                </Link>
                <Link
                  href="#main-products"
                  className="block hover:text-red-600"
                >
                  Sản phẩm chính
                </Link>
              </div>
            )}
          </div>
          <Link href="#new-carnival" className="block hover:text-red-600">
            New Carnival
          </Link>
          <Link href="#connect" className="block hover:text-red-600">
            Kia Connect
          </Link>
          <Link href="#price" className="block hover:text-red-600">
            Giá xe
          </Link>
          <Link href="/news" className="block hover:text-red-600">
            Tin tức và ưu đãi
          </Link>
          <Link href="#service" className="block hover:text-red-600">
            Dịch vụ
          </Link>
          <Link href="#dealers" className="block hover:text-red-600">
            Đại lý
          </Link>
          <Link href="#contact" className="block hover:text-red-600">
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}
