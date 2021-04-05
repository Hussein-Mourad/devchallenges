import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-3 sm:px-5 lg:px-8 pt-3 h-screen flex flex-col">
      <Head>
        <title>Cat Wiki</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <NavBar className="mb-5" />
      <div className="flex-grow">{children}</div>

      <Footer />
    </div>
  );
}
