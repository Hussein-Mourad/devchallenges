import Head from "next/head";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Head>
        <title>Auth app | Login</title>
      </Head>
      <div className="fixed inset-0 sm:flex justify-center items-center overflow-scroll">
        <div>
          <AuthCard title="Login" buttonText="Login">
            <p className="mt-4">
              Don't have an account yet?{" "}
              <Link href="/signup">
                <span className="text-blue-500 dark:text-blue-400 cursor-pointer">
                  Register
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
