import SearchBar from "./../components/SearchBar";
import SearchFilter from "./../components/SearchFilter";
import JobCard from "./../components/JobCard";
import Navigator from "./../components/Navigator";
import { useState } from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";

function Home({ jobs }) {
  const [items] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Gets current Projects
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const { items: pageItems } = usePagination({
    count: items.length / itemsPerPage,
    onChange: (e, value) => setCurrentPage(value),
  });

  return (
    <div>
      <SearchBar />
      <div className="lg:flex mt-5 ">
        <div className="lg:w-3/12 lg:mr-10">
          <SearchFilter />
        </div>
        <div className="mt-5 lg:m-0 lg:w-9/12">
          {currentItems.map((data, index) => (
            <Link to={`/${data.id}`}>
              <JobCard key={data.id} job={data} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-end">
        <Navigator items={pageItems} />
      </div>
    </div>
  );
}

export default Home;
