import { data } from "@/api/data";

const post = async ({ title }: { title: string }) => {
  const articles = await data();
  const singleBlogPost = articles.find((post: any) => post.title === title);
  return singleBlogPost;
};

const SinglePage = async ({ params }: { params: { title: string } }) => {
  const singlePost =await post(params);
 
  return(
    <>
      <div className="flex flex-col p-10 container mx-auto">
        <h1>Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  text-gray-600 ">
          {singlePost.map((article: any, index: number) => (
            <div
              key={index}
              className="m-2 py-4 px-5 flex flex-col gap-2 rounded-lg shadow-lg bg-white "
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
                <p className="text-sm">{article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
  
};

export default SinglePage;

export async function generateStaticParams() {
  const posts =await data();
    
  return posts.map((post) => ({
    title: post.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}
