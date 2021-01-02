import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import Me from '../img/Me.jpg'

export const CardPersonal = (props) => {
  let card;
  let cardImg;
  let textWrapper;
  let box;
  if (props.width === "full") {
    card = "my-5 p-5 shadow-lg max-w-full rounded-xl flex bg-white";
    cardImg = "rounded-xl mr-5";
    textWrapper = "flex justify-between w-full mb-6";
  } else if (props.width === "third") {
    card = "m-10 p-5 shadow-lg w-1/3 rounded-xl bg-white";
    cardImg = "rounded-xl w-full";
    textWrapper = "flex flex-col w-full mt-4 mb-6";
    box = "mt-5";
  }

  return (
    <div className={card}>
      <img
        src={Me}
        className={cardImg}
        alt="random img"
      ></img>
      <div>
        <div className={textWrapper}>
          <div>
            <p className="text-gray-600 text-2xl">Hussein Mourad</p>
            <p className="text-gray-400"> Computer Science Student</p>
          </div>
          <div className={box}>
            <p className="text-gray-600">
              <EmailIcon className="mr-3 " />
              husseinmouradkassem9901@gmail.com
            </p>

            <a
              className="text-gray-600"
              href="https://twitter.com/HusseinMourad0"
              target="_blank"
            >
              <TwitterIcon className="mr-3" />
              @HusseinMourad0
            </a>
          </div>
        </div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eaque
          doloremque vero praesentium provident rerum placeat molestias id autem
          nobis quod dolorem, fugiat labore consequatur ex reiciendis eius
          dolore deleniti?
        </p>
        <p className="text-gray-400 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim
          recusandae delectus voluptate, voluptas impedit iusto quam placeat
          aliquid optio deleniti officia amet repellendus. Soluta harum illo
          possimus in officiis?
        </p>
      </div>
    </div>
  );
};
