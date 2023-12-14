import { fetchData } from "@/api/data";

const post = async ({ title }: { title: string }) => {
  const articles = await fetchData();

  const singleArticle = articles.find(
    (article) =>
      article.title.replace(/\s+/g, "-").toLowerCase() ===
      article.title.replace(/\s+/g, "-").toLowerCase()
  );

  return singleArticle;
};

const SinglePage = async ({ params }) => {
  const article = await post(params);

  // Check if article is undefined
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1 className="">{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default SinglePage;

export async function generateStaticParams() {
  const posts = await fetchData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
