// File: src/app/news/[id]/page.tsx
import { newsList } from "@/data/news";
import { notFound } from "next/navigation";

interface NewsDetailPageProps {
  params: { id: string };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = newsList.find((n) => n.id === params.id);
  if (!news) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">{news.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{news.date}</div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </div>
  );
}
