import Icon from "@material-ui/core/Icon";
import Skeleton from "@material-ui/lab/Skeleton";
import JobBadge from "./JobBadge";
import getDifferenceInDays from "./../utils/getDifferenceInDays";
import { useState, useEffect } from "react";

const JobCardSkeleton = () => {
  return (
    <>
      <Skeleton
        className="mr-4 dark:bg-gray-600"
        animation="wave"
        variant="rect"
        width={154}
        height={130}
      />

      <div className="font-medium md:w-full">
        <Skeleton
          className="dark:bg-gray-600"
          animation="wave"
          variant="rect"
          width={100}
          height={14}
        />

        <Skeleton
          className="my-4 dark:bg-gray-600"
          animation="wave"
          variant="rect"
          width={250}
          height={16}
        />

        <div className="md:flex md:items-center md:justify-between md:w-full md:mt-8">
          <Skeleton
            className="mt-5 dark:bg-gray-600"
            animation="wave"
            variant="rect"
            width={120}
            height={28}
          />

          <div className="flex text-gray-400">
            <div className="inline-flex items-center mr-6">
              <>
                <Skeleton
                  className="mt-5 mr-2 dark:bg-gray-600"
                  animation="wave"
                  variant="circle"
                  width={24}
                  height={24}
                />
                <Skeleton
                  className="mt-5 dark:bg-gray-600"
                  animation="wave"
                  variant="rect"
                  width={80}
                  height={16}
                />
              </>
            </div>
            <div className="inline-flex items-center">
              <>
                <Skeleton
                  className="mt-5 mr-2 dark:bg-gray-600"
                  animation="wave"
                  variant="circle"
                  width={24}
                  height={24}
                />
                <Skeleton
                  className="mt-5 dark:bg-gray-600"
                  animation="wave"
                  variant="rect"
                  width={80}
                  height={16}
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function JobCard({ isLoading, job }) {
  
  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-md shadow-md p-4 my-4 w-full">
      {isLoading && <JobCardSkeleton />}
      {!isLoading && job.company && (
        <>
          <img
            className="rounded-sm mr-4 w-32 h-32"
            src={
              job.company_logo ||
              "https://via.placeholder.com/100x100.png?text=Not+Found"
            }
            alt=""
          />

          <div className="font-medium md:w-full">
            <h2 className="text-gray-800 dark:text-gray-200 text-lg">
              {job.company}
            </h2>

            <p className="text-gray-800 dark:text-gray-200 text-xl my-1">
              {job.title}
            </p>

            <div className="md:flex md:items-center md:justify-between md:w-full md:mt-8">
              <JobBadge className="mt-3 mb-8 md:mt-0 md:mb-0" text={job.type} />

              <div className="flex text-gray-400">
                <div className="inline-flex items-center mr-6">
                  <Icon className="mr-2">public</Icon>
                  <span>{job.location}</span>
                </div>
                <div className="inline-flex items-center">
                  <Icon className="mr-2">access_time</Icon>{" "}
                  <span>{getDifferenceInDays(job.created_at)} days ago</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
