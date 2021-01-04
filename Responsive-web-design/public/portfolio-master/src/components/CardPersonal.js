import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import Me from "../img/Me.jpg";

export const CardPersonal = (props) => {
  // let card;
  // let cardImg;
  // let textWrapper;
  // let box;
  // if (props.width === "full") {
  // } else if (props.width === "third") {
  //   card = "m-10 p-5 shadow-lg w-1/3 rounded-xl bg-white";
  //   cardImg = "rounded-xl w-full";
  //   textWrapper = "flex flex-col w-full mt-4 mb-6";
  //   box = "mt-5";
  // }

  return (
    <div className=" lg:my-5 mb-5 mt-3 p-5 shadow-lg w-full rounded-xl flex flex-col sm:flex-row bg-white items-center md:items-start md:text-left">
      <div className="mb-5 sm:mb-0 mr-8 w-72 sm:w-48 ">
        <img src={Me} className="rounded-xl w-full" alt="Me" />
      </div>
      <div className="w-96 sm:w-8/12 ">
        <div className="flex flex-col lg:flex-row justify-between w-full mb-2 lg:mb-6">
          <div className="mr-10 ">
            <p className="text-gray-600 text-2xl">Hussein Mourad</p>
            <p className="text-gray-400"> Computer Engineering Student</p>
          </div>
          <div className="mt-3 lg:mt-0">
            <p className="text-gray-600">
              <EmailIcon className="mr-3 " />
              husseinmouradkassem9901@gmail.com
            </p>

            <a
              className="text-gray-600"
              href="https://twitter.com/HusseinMourad0"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="mr-3" />
              @HusseinMourad0
            </a>
          </div>
        </div>
        <p className="text-gray-400">
          A Passionate CS student who loves problem solving and willing to learn
          and expand his skillset inorder to be market ready
        </p>
      </div>
    </div>
  );
};
