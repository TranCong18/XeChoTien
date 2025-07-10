// File: src/app/features/page.tsx
"use client";

import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";

export default function FeaturesPage() {
  // Sắp xếp lại các card theo yêu cầu
  // 3 card ít text nhất
  const featuresRow1 = [
    {
      id: 1,
      title: "Xe chở tiền",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Xe cơ sở do NIAD cung cấp là <b>loại xe chở tiền</b> được sản xuất,
            lắp ráp trên nền xe Pick-up cabin kép, xe tải van hoặc xe 7 chỗ
            thông dụng.
          </li>
        </ul>
      ),
      icon: "🛡️",
      image: "/images/cars/test2-removebg-preview.png",
    },
    {
      id: 4,
      title: "Hình thức hợp đồng",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Hợp đồng mua bán.</li>
          <li>Hợp đồng thuê dài hạn.</li>
        </ul>
      ),
      icon: "📄",
      image: "/images/test2-removebg-preview.png",
    },
    {
      id: 6,
      title: "Thời gian nhanh chóng",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Số lượng linh hoạt từ 01 - 100 xe.</li>
          <li>Thời gian giao hàng chỉ từ 1-3 tháng kể từ ngày đặt cọc.</li>
        </ul>
      ),
      icon: "⏱️",
      image: "/images/test3.png",
    },
  ];
  // 3 card trung bình
  const featuresRow2 = [
    {
      id: 5,
      title: "Thanh lý dễ dàng",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Không hạn chế đối tượng mua lại (không bị truy thu thuế khi bán cho
            đối tượng khác không phải tổ chức tín dụng).
          </li>
          <li>Tiết kiệm thời gian và kinh phí thực hiện thủ tục thanh lý.</li>
        </ul>
      ),
      icon: "🔄",
      image: "/images/cars/test2.png",
    },
    {
      id: 7,
      title: "Pháp lý an toàn",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Có chứng nhận chất lượng, an toàn kỹ thuật của cục đăng kiểm.</li>
          <li>
            Xác nhận xe phù hợp với tiêu chuẩn thiết kế chở tiền của NHNN.
          </li>
          <li>Có giấy chứng nhận đăng ký xe do cơ quan công an cấp.</li>
        </ul>
      ),
      icon: "✅",
      image: "/images/cars/test2-removebg-preview.png",
    },
    {
      id: 3,
      title: "Giá cả cạnh tranh",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Sản xuất trên loại xe cơ sở có giá thành hợp lý, đặc biệt là loại xe
            bán tải có dung tích dưới 2.500 cc đang được hưởng thuế suất (thuế
            nhập khẩu, thuế tiêu thụ đặc biệt) và lệ phí trước bạ hợp lý hơn.
          </li>
          <li>
            Chi phí sản xuất thùng chở tiền trong nước đảm bảo cạnh tranh được
            so với chi phí của dòng xe chở tiền nhập khẩu nguyên chiếc.
          </li>
        </ul>
      ),
      icon: "💰",
      image: "/images/test3.png",
    },
  ];
  // 1 card nhiều text nhất
  const featureRow3 = {
    id: 2,
    title: "Chất lượng ưu việt",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Thiết kế đảm bảo các tiêu chuẩn xe thiết kế chở tiền theo quy định của
          Ngân hàng Nhà nước.
        </li>
        <li>
          Thêm nhiều tính năng hỗ trợ tối đa cho người sử dụng trong quá trình
          xếp dỡ hàng hóa.
        </li>
        <li>
          Thùng chở tiền được sản xuất, lắp ráp trên dây truyền máy móc công
          nghệ hiện đại, sử dụng toàn bộ vật liệu chất lượng cao, có độ bền lâu
          năm giúp kéo dài tuổi thọ của sản phẩm, giảm chi phí bảo trì, bảo
          dưỡng và đảm bảo không ảnh hưởng đến kết cấu của xe cơ sở.
        </li>
        <li>
          Xe cơ sở được bảo hành 3 năm hoặc 1.000 km tại các trạm bảo hành chính
          hãng trên toàn quốc.
        </li>
      </ul>
    ),
    icon: "✨",
    image: "/images/cars/test2.png",
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ưu điểm nổi bật
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Khám phá những tính năng vượt trội làm nên sự khác biệt của KIA
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 space-y-8">
            {/* Hàng 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {featuresRow1.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={192}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{feature.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="text-gray-600 leading-relaxed flex-1">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Hàng 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {featuresRow2.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={192}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{feature.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="text-gray-600 leading-relaxed flex-1">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Hàng 3: 1 card nhiều text nhất, căn giữa và rộng bằng card thường */}
            <div className="flex justify-center items-stretch">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full max-w-md">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={featureRow3.image}
                    alt={featureRow3.title}
                    width={400}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{featureRow3.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {featureRow3.title}
                    </h3>
                  </div>
                  <div className="text-gray-600 leading-relaxed flex-1">
                    {featureRow3.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng trải nghiệm?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt lịch lái
              thử xe KIA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Đặt lịch lái thử
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Đại lý toàn quốc</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  100K+
                </div>
                <div className="text-gray-600">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-600">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
