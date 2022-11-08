import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Next JS pre-rendering</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href="/users">Users</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/products">Products</Link>
        <Link href="/news">News</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard-swr">Dashboard SWR</Link>
      </div>
    </div>
  );
}

export default Home;
