import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

function Dashboard() {
  const { status } = useSession();

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "unauthenticated") {
    return (
      <h2>
        Access Denied. Please{" "}
        <Link href="/api/auth/signin" legacyBehavior>
          <a
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign In
          </a>
        </Link>
      </h2>
    );
  }

  return (
    <>
      <h1>Protected page</h1>
      <p>You can view Dashboard Page, because you are Signed In</p>
    </>
  );
}

export default Dashboard;
