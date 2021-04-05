import Link from "next/link";
export default function MostSearched({ children }) {
  return (
    <div className="bg-hero rounded-b-3xl p-5 text-primary">
      <h2 className="font-medium">Most Searched Breeds</h2>
      <div className="mt-1 h-[3px] w-12 rounded-md bg-primary"></div>
      <div className="mt-5 sm:inline-flex justify-between w-full">
        <h1 className="text-3xl font-bold">66+ Breeds For you to discover</h1>
        <Link href="/discover">
          <button className="px-2 py-1 uppercase text-primary text-opacity-50 text-sm inline-flex items-center mt-3 sm:mt-0 sm:w-32 focus:outline-none hover:bg-primary hover:bg-opacity-10 active:bg-opacity-20 rounded-md">
            see more{" "}
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
          </button>
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
        {children}
      </div>
    </div>
  );
}
