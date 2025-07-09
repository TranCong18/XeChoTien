// File: src/components/NewsSection.tsx
// ✅ Đường dẫn: src/components/NewsSection.tsx

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import clsx from "clsx";

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
  {
    title: "Tăng cường bảo mật xe vận chuyển tiền",
    description: "Trang bị khóa sinh trắc học và mã hóa dữ liệu đường truyền.",
    image: "/images/news/test2.png",
    date: "20/04/2025",
  },
  {
    title: "Hợp tác chiến lược cùng Bộ Công An",
    description: "Đảm bảo an toàn tuyệt đối cho mọi tuyến đường vận chuyển.",
    image: "/images/news/test2.png",
    date: "18/04/2025",
  },
  {
    title: "Xe mới tích hợp AI nhận diện khuôn mặt",
    description: "Chống trộm và phát hiện hành vi bất thường tức thời.",
    image: "/images/news/test2.png",
    date: "15/04/2025",
  },
  {
    title: "Hệ thống định vị toàn cầu chính xác từng giây",
    description: "Ứng dụng công nghệ GNSS vào vận hành xe bọc thép.",
    image: "/images/news/test2.png",
    date: "10/04/2025",
  },
  {
    title: "Tham gia triển lãm công nghệ bảo mật 2025",
    description: "Trưng bày dòng xe vận chuyển tiền hiện đại nhất Đông Nam Á.",
    image: "/images/news/test2.png",
    date: "05/04/2025",
  },
];

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <section id="news" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Sản Phẩm Mới</h2>
        <Slider {...settings}>
          {newsList.map((news, index) => {
            const isActive = index === currentSlide;
            return (
              <div key={index} className="px-2">
                <div
                  className={clsx(
                    "border rounded-xl overflow-hidden shadow transition-all duration-500",
                    isActive
                      ? "bg-white scale-105 shadow-xl"
                      : "bg-gray-100 scale-95 opacity-50"
                  )}
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
                    <p className="text-sm text-gray-600 mt-2">
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
