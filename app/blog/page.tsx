"use client";

import { data } from "@/api/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  url: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getArticles = async () => {
    const response = await data();
    setArticles(response.articles);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="flex flex-col p-10 container mx-auto">
        <h1>Blog</h1>

        {loading ? (
          <div className="min-h-screen flex justify-center items-center">
            <PuffLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  text-gray-600 ">
            {articles.map((article, index) => (
              <Link
                href={`/blog/${article.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                key={index}
                className="m-2 py-4 px-5 flex flex-col gap-2 rounded-lg shadow-lg bg-white "
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-bold">{article.title}</h2>
                <p className="text-sm truncate line-clamp-3 whitespace-normal">
                  {article.description}
                </p>
                <p className="text-sm text-green-500 fontmed">
                  <span className="text-xs text-black">Author: </span>{" "}
                  {article.author}
                </p>
                <p className="text-sm">{article.publishedAt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
