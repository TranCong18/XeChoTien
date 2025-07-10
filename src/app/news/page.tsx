// File: src/app/news/page.tsx
"use client";
import Link from "next/link";
import { newsList } from "@/data/news";
import Image from "next/image";
import { useState } from "react";
import DefaultLayout from "@/layout/DefaultLayout";

function getFirstImageSrc(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

const PAGE_SIZE = 5;

export default function NewsListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(newsList.length / PAGE_SIZE);
  const pagedNews = newsList.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Tin tức</h1>
        <div className="space-y-8">
          {pagedNews.map((news) => {
            const imgSrc = getFirstImageSrc(news.content);
            return (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-4 items-start"
              >
                {imgSrc && (
                  <div className="flex-shrink-0 w-full md:w-64 relative aspect-video">
                    <Image
                      src={imgSrc}
                      alt={news.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 256px"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">
                    <Link
                      href={`/news/${news.id}`}
                      className="hover:text-red-600"
                    >
                      {news.title}
                    </Link>
                  </h2>
                  <div className="text-gray-500 text-sm mb-2">{news.date}</div>
                  <div
                    className="text-gray-700 line-clamp-3 mb-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        news.content.replace(/<[^>]+>/g, " ").slice(0, 180) +
                        (news.content.length > 180 ? "..." : ""),
                    }}
                  />
                  <Link
                    href={`/news/${news.id}`}
                    className="text-red-600 hover:underline text-sm font-medium"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            <button
              className="px-3 py-1 rounded border text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Trước
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border text-sm ${
                  page === i + 1
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded border text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Sau
            </button>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
