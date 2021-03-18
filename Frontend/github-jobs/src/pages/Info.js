import { Link, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import JobBadge from "./../components/JobBadge";
import GetDiffInDates from "../utils/GetDiffInDates";
import Icon from "@material-ui/core/Icon";
import { useContext } from "react";
import { GlobalState } from "../GlobalState";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Info() {
  const { state } = useContext(GlobalState);
  const { jobId } = useParams();
  const job = state.data.find((obj) => obj.id === jobId);

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="lg:flex lg:mt-2">
      <div className="lg:max-w-xs lg:mr-10">
        <Link
          to="/"
          className="flex items-center py-2 mt-6 text-blue-500 text-lg font-medium"
        >
          <KeyboardBackspaceIcon className="mr-2" /> <span>Back to search</span>
        </Link>
        <div className="mt-6">
          <h1 className="text-gray-400 text-lg font-bold uppercase dark:text-gray-300">
            How to apply
          </h1>
          <div className="mt-4 font-medium text-gray-900 dark:text-gray-300">
            Please email a copy of your resume and online portfolio to
            <div
              className="text-blue-500 break-words"
              dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        {" "}
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:flex md:items-center  text-gray-800 dark:text-gray-200 text-xl font-bold mr-3 mb-2 md:mb-0">
            {job.title}
          </div>
          <JobBadge className="mb-2 md:mb-0" text={job.type} />
        </div>
        <div className="inline-flex items-center text-gray-400 mt-2">
          <Icon className="mr-2">access_time</Icon>{" "}
          <GetDiffInDates dateString={job.created_at} />
        </div>
        <div className="mt-8 flex flex-col flex-wrap">
          <div className="rounded-sm mr-4 mb-4 max-w-xs">
            <img
              className=""
              src={
                job.company_logo ||
                "https://via.placeholder.com/100x100.png?text=Not+Found"
              }
              alt=""
            />
          </div>
          <div>
            {" "}
            <h2 className="text-gray-800 dark:text-gray-200 text-lg font-bold">
              {job.company}
            </h2>
            <div className="inline-flex items-center text-gray-400 mt-3">
              <Icon className="mr-2">public</Icon>
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div
          className="mt-5 text-gray-800 dark:text-gray-300 max-w-2xl job-description"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </div>
    </div>
  );
}
