// File: src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Navigation Split */}
        <div className="hidden md:flex flex-1 justify-start items-center gap-8 text-sm text-black">
          <Link href="#about" className="hover:text-red-600">
            Về Kia
          </Link>
          <Link href="#products" className="hover:text-red-600">
            Sản phẩm
          </Link>
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
          <Link href="#news" className="hover:text-red-600">
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
          <Link href="#about" className="block hover:text-red-600">
            Về Kia
          </Link>
          <Link href="#products" className="block hover:text-red-600">
            Sản phẩm
          </Link>
          <Link href="#new-carnival" className="block hover:text-red-600">
            New Carnival
          </Link>
          <Link href="#connect" className="block hover:text-red-600">
            Kia Connect
          </Link>
          <Link href="#price" className="block hover:text-red-600">
            Giá xe
          </Link>
          <Link href="#news" className="block hover:text-red-600">
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
