import Link from "next/link";

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id}. {article.title} |{" "}
              <Link href={`/news/${article.category}`}>{article.category}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  console.log("Pre-rendering NewsArticleList");

  return {
    props: {
      articles: data,
    },
  };
}
