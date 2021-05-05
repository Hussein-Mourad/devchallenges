import InputGroup from "./InputGroup";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Button from "./Button";
import Logo from "./Logo";
import Footer from "./Footer";
import Spacer from "./Spacer";

const Icon = ({ src, alt, onClick }) => {
  return (
    <button className="inline-flex items-center justify-center rounded-full active:ring active:ring-gray-100 focus:outline-none">
      <img src={src} alt={alt} />
    </button>
  );
};

export default function AuthCard({ title, subTitle, children, buttonText }) {
  // const [value, setValue] = useState("")
  return (
    <form
      className="p-4 sm:p-8 flex flex-col rounded-lg sm:border sm:border-gray-300 w-full sm:max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Logo />

      <h2 className="text-lg font-medium mt-5 text-gray-900 dark:text-gray-200">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 my-3">{subTitle}</p>
      <Spacer margin="my-2">
        <InputGroup type="email" placeholder="Email" leftIcon={<EmailIcon />} />
      </Spacer>
      <Spacer margin="my-2">
        <InputGroup
          type="password"
          placeholder="Password"
          leftIcon={<LockIcon />}
        />
      </Spacer>
      <Button className="my-3 text-white dark:text-gray-200 bg-blue-500 font-medium active:bg-blue-600 focus:ring focus:ring-blue-300 dark:focus:ring-blue-400">
        {buttonText}
      </Button>
      <div className="flex flex-col items-center text-gray-700 dark:text-gray-300 text-sm mt-3 sm:mt-5">
        <p>or continue with these social profile</p>
        <div className="grid grid-cols-4 gap-5 mt-4">
          <Icon src="/icons/Google.svg" alt="Google icon" />
          <Icon src="/icons/Facebook.svg" alt="Facebook icon" />
          <Icon src="/icons/Twitter.svg" alt="Twitter icon" />
          <Icon src="/icons/Github.svg" alt="Github icon" />
        </div>
        {children}
      </div>
      <Footer className="mt-5 flex sm:hidden max-w-md" />
    </form>
  );
}
