import Button from "../components/Button";
import Link from 'next/link'

const ProfileItem = ({ title, children }) => {
  return (
    <div className="flex items-center justify-between sm:justify-start px-2 py-8 sm:px-10">
      <span className="w-5/12 sm:w-2/12 mr-5 text-sm text-gray-500 dark:text-gray-300 font-medium uppercase">
        {title}
      </span>{" "}
      {children}
    </div>
  );
};

export default function Profile() {
  const fields = ["photo", "name", "bio", "phone", "email", "password"];
  return (
    <div className="sm:border border-gray-300 divide-y rounded-lg mt-2 sm:mt-7 w-full">
      <div className="w-full flex items-center justify-between px-2 sm:px-10 py-8">
        <div className="flex flex-col font-medium text-lg text-gray-800 dark:text-gray-200">
          Profile{" "}
          <span className="text-sm font-base text-gray-500 dark:text-gray-300">
            Some info may be visible to other people
          </span>
        </div>
        <Button className="border border-gray-300"><Link href="/edit">Edit</Link></Button>
      </div>
      {fields.map((field) => (
        <ProfileItem title={field}>dkjddjkdkjfjkd</ProfileItem>
      ))}
    </div>
  );
}
