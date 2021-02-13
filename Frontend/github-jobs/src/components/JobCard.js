import Icon from "@material-ui/core/Icon";

function JobCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 my-4 w-full">
      <div className="flex">
        <img
          className="rounded-sm mr-4 w-32 h-32"
          src="https://picsum.photos/100/100"
          alt=""
        />
        <div className="font-medium md:w-full">
          <h2 className="text-gray-800 dark:text-gray-200 text-lg">Kasisto</h2>
          <p className="text-gray-800 dark:text-gray-200 text-xl my-1">
            Front-End Software Engineer
          </p>
          <div className="md:flex md:items-center md:justify-between md:w-full md:mt-8">
            <div className="max-w-max px-3 py-1 mt-3 mb-8 md:mt-0 md:mb-0 border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-gray-200 rounded-md">
              Full time
            </div>
            <div className="flex text-gray-400">
              <div className="inline-flex items-center mr-6">
                <Icon className="mr-2">public</Icon>
                <span>New York</span>
              </div>
              <div className="inline-flex items-center">
                <Icon className="mr-2">access_time</Icon>{" "}
                <span>5 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
