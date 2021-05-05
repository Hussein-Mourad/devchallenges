import Head from "next/head";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auth app | Signup</title>
      </Head>
      <div className="fixed inset-0 sm:flex justify-center items-center overflow-scroll">
        <div>
          <AuthCard
            title="Join thousands of learners from around the world"
            subTitle="Master web development by making real-life projects. There are multiple paths for you to choose"
            buttonText="Start coding now"
          >
            <p className="mt-4">
              Already a member?{" "}
              <Link href="/login">
                <span className="text-blue-500 dark:text-blue-400 cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </AuthCard>
          <Footer className="mt-3 hidden sm:flex max-w-md" />
        </div>
      </div>
    </>
  );
}
