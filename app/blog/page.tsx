import data from "../../public/data.json"
import Link from "next/link";
import { PuffLoader } from "react-spinners";

// interface Article {
//   source: {
//     id: string;
//     name: string;
//   };
//   author: string;
//   title: string;
//   description: string;
//   urlToImage: string;
//   publishedAt: string;
//   content: string;
//   url: string;
// }

const Blog = async () => {
  const articles = data
 console.log(articles);         

  return (
    <>
      <div className="flex flex-col p-10 container mx-auto">
        <h1>Blog</h1>

        {!articles ? (
          <div className="min-h-screen flex justify-center items-center">
            <PuffLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  text-gray-600 ">
            {articles.map((article: any) => (
              <Link
                href={`/blog/${article.slug}`}
                key={article.name}
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
