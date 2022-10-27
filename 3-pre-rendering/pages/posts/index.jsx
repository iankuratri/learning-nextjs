import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>PostList</h1>

      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h2 style={{ cursor: "pointer" }}>
                  {post.id}. {post.title}
                </h2>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
