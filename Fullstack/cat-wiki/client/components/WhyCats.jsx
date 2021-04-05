export default function WhyCats({ className }) {
  return (
    <div
      className={"mt-5  md:flex justify-between items-center" + " " + className}
    >
      <div className="md:mr-10 md:-mt-5 md:w-6/12">
        <div className="mt-10 md:mt-12 h-[3px] w-12 rounded-md bg-primary"></div>
        <h1 className="text-5xl text-primary mt-3 font-bold leading-tight">
          Why should you have a cat?
        </h1>
        <p className="text-primary text-lg mt-3 md:mt-5 font-medium">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>

        <a
          className="uppercase text-primary text-opacity-50 text-sm inline-flex items-center mt-3 md:mt-5 focus:outline-none  hover:bg-primary hover:bg-opacity-10 active:bg-opacity-20 rounded-md px-2 py-1"
          href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner"
          target="_blank"
        >
          read more
          <i className="ml-1 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </i>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 md:w-6/12">
        <div>
          <img className="mb-5 w-full" src="/images/image2.png" alt="cat" />
          <div className="flex justify-end">
            <img className="w-2/3" src="/images/image1.png" alt="cat" />
          </div>
        </div>
        <img className="w-full" src="/images/image3.png" alt="cat" />
      </div>
    </div>
  );
}
