import { getSession } from "next-auth/react";

function Blog({ data }) {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>{data}</p>
    </div>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
      data: session ? "List of 100 paid posts." : "List of 100 free posts.",
    },
  };
}
