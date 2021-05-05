import Button from "../components/Button";
import Link from "next/link";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import InputGroup from "../components/InputGroup";
import Spacer from "../components/Spacer";

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

export default function ProfileEdit() {
  const fields = ["photo", "name", "bio", "phone", "email", "password"];
  return (
    <div className="sm:border border-gray-300 rounded-lg sm:mt-2 w-full p-2 sm:px-10 sm:py-5 md:py-8">
      <h1 className="text-xl">Change info</h1>
      <p className="mt-2 dark:text-gray-200 text-sm">
        Changes will be reflected to every services
      </p>
      <div className="flex items-center">
        <div className="relative mt-5 mr-5 w-28 h-28 group">
          <button className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 w-full rounded-md text-white active:text-gray-200">
            <CameraAltIcon />
          </button>
          <img
            className="w-full rounded-md"
            src="https://picsum.photos/100"
            alt="shit"
          />
        </div>
        <h3 className="uppercase text-gray-400 dark:text-gray-200 text-sm">
          change photo
        </h3>
      </div>
      <div>
        <Spacer margin="my-3">
          <InputGroup
            inputClassName="p-2 text-sm placeholder-gray-400"
            label="Name"
            type="text"
            placeholder="Enter your name..."
          />
        </Spacer>
        <Spacer margin="my-3">
          <InputGroup
            inputClassName="p-2 text-sm placeholder-gray-400"
            type="text"
            label="Bio"
            placeholder="Enter your Bio..."
            multiline
            cols="30"
            rows="5"
          />
        </Spacer>
        <Spacer margin="my-3">
          <InputGroup
            inputClassName="p-2 text-sm placeholder-gray-400"
            label="Phone"
            type="number"
            placeholder="Enter your phone..."
          />
        </Spacer>
        <Spacer margin="my-3">
          <InputGroup
            inputClassName="p-2 text-sm placeholder-gray-400"
            label="Email"
            type="email"
            placeholder="Enter your email..."
          />
        </Spacer>
        <Spacer margin="my-3">
          <InputGroup
            inputClassName="p-2 text-sm placeholder-gray-400"
            label="Password"
            type="password"
            placeholder="Enter your password..."
          />
        </Spacer>
        <Button className="my-3 text-white dark:text-gray-200 bg-blue-500 font-medium active:bg-blue-600 focus:ring focus:ring-blue-300 dark:focus:ring-blue-400">
          Save
        </Button>
      </div>
    </div>
  );
}
