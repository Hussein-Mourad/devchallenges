import Head from "next/head";
import SignUpCard from "../components/SignUpCard";
import Link from "next/link";
import AuthCard from '../components/AuthCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className="sm:p-20 sm:flex justify-center items-center w-screen h-screen">
        <div>
          <SignUpCard />
          <AuthCard
            title="Join thousands of learners from around the world"
            subTitle="Master web development by making real-life projects. There are multiple paths for you to choose"
          >
            <p className="mt-4">
              Already a member?{" "}
              <Link href="/login">
                <span className="text-blue-500 dark:text-blue-400">Login</span>
              </Link>
            </p>
          </AuthCard>
          <div className="mt-3 hidden sm:flex justify-between text-sm text-gray-700 dark:text-gray-300 w-full max-w-md">
            <span>
              created by{" "}
              <a
                className="underline"
                href="https://devchallenges.io/portfolio/Hussein-Mourad"
              >
                Hussein-Mourad
              </a>
            </span>
            <a href="https://devchallenges.io">devchallenges.io</a>
          </div>
        </div>
      </div>
    </>
  );
}
