import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const aboutBlocks = [
  {
    image: "/d6dc6f35-0b5c-4483-89a9-9e04d4e32c5e.png",
    title: "Về NIAD",
    content: `Công ty cổ Phần Đầu tư và Phát triển Nguồn Lực (NIAD) được thành lập từ năm 2007 trên cơ sở vốn góp của các cán bộ nhân viên Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV) là đoàn viên công đoàn sinh hoạt tại các công đoàn cơ sở trên toàn hệ thống BIDV.\n\nVới mục tiêu bảo toàn và gia tăng lợi ích cho người góp vốn, NIAD luôn lựa chọn các ngành nghề kinh doanh an toàn với mức sinh lời hợp lý, trong đó NIAD đặc biệt chú trọng đến các hoạt động kinh doanh dịch vụ. Hiện nay NIAD đang cung cấp hàng loạt dịch vụ phục vụ hoạt động của hệ thống BIDV nói riêng và các Ngân hàng nói chung mà nổi chung trên toàn quốc bao gồm:\n\n• Dịch vụ cho thuê xe ô tô hoạt động;\n• Dịch vụ quản lý tòa nhà;\n• Dịch vụ cung cấp máy móc thiết bị văn phòng, máy phát điện, điều hòa;\n• Đại lý vé máy bay;\n• Dịch vụ tour du lịch, tổ chức sự kiện;\n• Dịch vụ bảo vệ an ninh;\n• Dịch vụ mua bán ô tô\n\nVới tiềm năng về khả năng tài chính với mức vốn điều lệ gần 500 tỷ đồng cũng như khả năng hỗ trợ tín dụng từ hệ thống Ngân hàng chúng tôi hy vọng sẽ đáp ứng được những nhu cầu mong muốn của Quý vị.`,
  },
  {
    image: "/test2.png",
    title: "Năng lực, kinh nghiệm cung cấp xe",
    content: `Chúng tôi đã thực hiện cung cấp xe ô tô bán tải phục vụ nhu cầu hoạt động ngân hàng di động cho một số ngân hàng với số lượng xe gần 300 xe. Với kinh nghiệm phục vụ nhu cầu xe ô tô cho các ngân hàng nhiều năm qua, NIAD hoàn toàn tin tưởng sẽ đáp ứng nhu cầu xe ô tô của Quý khách hàng một cách tốt nhất.\n\nXe chở tiền hoán cải từ xe bán tải là sản phẩm mới mà chúng tôi nghiên cứu đưa ra thị trường nhằm đáp ứng nhu cầu xe chuyên dụng cho các tổ chức tín dụng, doanh nghiệp kinh doanh vàng bạc, thu đổi ngoại tệ,... Tính đến thời điểm hiện tại, chúng tôi đang là đơn vị duy nhất có khả năng cung cấp xe ô tô bán tải chở tiền với số lượng không giới hạn, đã có đầy đủ giấy tờ thẩm định thiết kế và cấp phép lưu hành cho xe chuyên dụng của các cơ quan chức năng (Ngân hàng Nhà nước, Cục đăng kiểm,...)`,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen p-0 m-0">
        <div className="space-y-0">
          {aboutBlocks.map((block, idx) => (
            <section
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-center gap-8 bg-white rounded-none shadow-none p-6 min-h-screen w-screen justify-center"
              style={{ minHeight: "100vh", width: "100vw" }}
            >
              <div className="w-full md:flex-[4] flex justify-center items-center">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={800}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover"
                  style={{ maxWidth: "100%", width: "100%" }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-red-600">
                  {block.title}
                </h2>
                <p className="text-lg text-gray-700 whitespace-pre-line">
                  {block.content}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
