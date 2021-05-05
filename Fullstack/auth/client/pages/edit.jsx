import NavBar from "../components/NavBar";
import ProfileEdit from "../components/ProfileEdit";
import Footer from "../components/Footer";
import Link from "next/link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
export default function edit() {
  return (
    <>
      <NavBar />
      <div className="mx-auto mt-8 flex flex-col text-gray-800 dark:text-gray-100 max-w-3xl">
        <Link href="/">
          <button className="flex items-center text-blue-400 text-base focus:outline-none">
            <ChevronLeftIcon className="mr-1" /> Back
          </button>
        </Link>
        <ProfileEdit />
        <Footer className="flex mt-2" />
      </div>
    </>
  );
}
