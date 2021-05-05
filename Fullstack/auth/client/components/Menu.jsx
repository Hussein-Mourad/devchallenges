import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GroupIcon from "@material-ui/icons/Group";
import Button from "./Button";
const MenuItem = ({ text, icon, className }) => {
  return (
    <Button
      className={`${className} hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-600 dark:active:bg-gray-700 w-full justify-start`}
      leftIcon={icon}
    >
      {text}
    </Button>
  );
};
export default function Menu() {
  return (
    <div className="p-1 bg-white dark:bg-[#333] rounded-lg border border-gray-300 absolute right-0 w-44 mt-3 text-sm text-gray-700 dark:text-gray-200">
      <MenuItem icon={<AccountCircleIcon />} text="My Profile" />
      <MenuItem icon={<GroupIcon />} text="Group Chat" />
      <hr className="my-1 mx-2" />
      <MenuItem
        className="text-red-500"
        icon={<ExitToAppIcon />}
        text="Logout"
      />
    </div>
  );
}
