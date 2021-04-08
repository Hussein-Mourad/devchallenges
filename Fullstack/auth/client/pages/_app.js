import "../styles/globals.css";
import  Head  from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-[#333]">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />{" "}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
