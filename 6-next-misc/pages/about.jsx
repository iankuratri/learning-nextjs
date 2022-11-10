import Footer from "../components/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page of my company." />
      </Head>
      <h1 className="content">About Page</h1>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
