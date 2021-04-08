import Link from "next/link";
import InputGroup from "./InputGroup";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Button from "./Button";

export default function SignUpCard() {
  return (
    <div className="p-4 sm:p-8 flex flex-col rounded-lg sm:border sm:border-gray-300 w-full sm:max-w-md">
      <div>
        <img
          className="dark:hidden"
          src="/icons/devchallenges.svg"
          alt="logo"
        />
        <img
          className="hidden dark:block"
          src="/icons/devchallenges-light.svg"
          alt="logo"
        />
      </div>

      <h2 className="text-lg font-medium mt-5 text-gray-900 dark:text-gray-200">
        Join thousands of learners from around the world
      </h2>
      <p className="text-gray-700 dark:text-gray-300 my-3">
        Master web development by making real-life projects. There are multiple
        of paths for you to choose
      </p>
      <InputGroup type="email" placeholder="Email" leftIcon={<EmailIcon />} />
      <InputGroup
        type="password"
        placeholder="Password"
        leftIcon={<LockIcon />}
      />
      <Button className="my-3 text-white dark:text-gray-200 bg-blue-500 font-medium active:bg-blue-600 focus:ring focus:ring-blue-300 dark:focus:ring-blue-400">
        Start coding now
      </Button>
      <div className="flex flex-col items-center text-gray-700 dark:text-gray-300 text-sm mt-3 sm:mt-5">
        <p>or continue with these social profile</p>
        <div className="grid grid-cols-4 gap-5 mt-4">
          <button className="focus:outline-none">
            <img src="/icons/Google.svg" alt="Google icon" />
          </button>
          <button className="focus:outline-none">
            <img src="/icons/Facebook.svg" alt="Facebook icon" />{" "}
          </button>
          <button className="focus:outline-none">
            <img src="/icons/Twitter.svg" alt="Twitter icon" />{" "}
          </button>
          <button className="focus:outline-none">
            <img src="/icons/Github.svg" alt="Github icon" />{" "}
          </button>
        </div>
        <p className="mt-4">
          Already a member?{" "}
          <Link href="/login">
            <span className="text-blue-500 dark:text-blue-400">Login</span>
          </Link>
        </p>
      </div>
      <div className="mt-5 flex sm:hidden justify-between text-sm text-gray-700 dark:text-gray-300 w-full max-w-md">
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
  );
}
