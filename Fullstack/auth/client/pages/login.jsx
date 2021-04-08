import Head from "next/head";
import LogInCard from "../components/LogInCard";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="sm:p-20 sm:flex justify-center items-center w-screen h-screen">
        <div>
          <LogInCard />
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
