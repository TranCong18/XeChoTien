// File: src/components/NewsSection.tsx
// ✅ Đường dẫn: src/components/NewsSection.tsx

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const newsList = [
  {
    title: "Ra mắt xe chở tiền chống đạn phiên bản 2025",
    description: "Dòng xe mới đạt tiêu chuẩn EN1063 cấp độ B6 chống đạn.",
    image: "/images/news/test2.png",
    date: "12/05/2025",
  },
  {
    title: "Ký kết hợp tác với ngân hàng quốc tế",
    description: "Cung cấp 50 xe vận chuyển tiền cho hệ thống ATM toàn quốc.",
    image: "/images/news/test2.png",
    date: "05/05/2025",
  },
  {
    title: "Hội thảo “An ninh vận chuyển tài chính 4.0”",
    description: "Giải pháp tích hợp GPS, camera AI và cảnh báo xâm nhập.",
    image: "/images/news/test2.png",
    date: "25/04/2025",
  },
];

const awards = [
  "/images/award1.jpg",
  "/images/award1.jpg",
  "/images/award1.jpg",
  "/images/award1.jpg",
  "/images/award1.jpg",
  "/images/award1.jpg",
  "/images/award1.jpg",
  "/images/award1.jpg",
];

export default function NewsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (slider.current) {
      interval = setInterval(() => {
        slider.current?.next();
      }, 2500); // 2.5 giây
    }
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section id="news" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          📰 Tin tức & Sự kiện
        </h2>

        {/* Tin tức */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-xl shadow hover:shadow-md overflow-hidden transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Giải thưởng */}
        <h3 className="text-center text-green-700 text-xl font-semibold mt-12 mb-4">
          Ghi nhận của cộng đồng dành cho BIC
        </h3>

        <div
          ref={(ref) => {
            sliderRef.current = ref;
            sliderInstanceRef(ref);
          }}
          className="keen-slider"
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center"
            >
              <Image
                width={200}
                height={200}
                src={award}
                alt={`Award ${index + 1}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
