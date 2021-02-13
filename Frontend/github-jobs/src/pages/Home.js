import SearchBar from "./../components/SearchBar";
import SearchFilter from "./../components/SearchFilter";
import JobCard from "./../components/JobCard";
import Navigator from "./../components/Navigator";

function Home() {
  // const [projects] = useState(objects);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [projectsPerPage] = useState(3);

  // // Gets current Projects
  // const indexOfLastProject = currentPage * projectsPerPage;
  // const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  // const currentProjects = projects.slice(
  //   indexOfFirstProject,
  //   indexOfLastProject
  // );

  // // Change Page
  // const paginate = (pageNumber, previous, next) => {
  //   const previousPage = currentPage - 1;
  //   const nextPage = currentPage + 1;
  //   if (previous) {
  //     setCurrentPage(previousPage);
  //   } else if (next) {
  //     setCurrentPage(nextPage);
  //   } else {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  return (
    <div>
      <SearchBar />
      <div className="md:flex mt-5 ">
        <div className="md:w-3/12 md:mr-10">
          <SearchFilter />
        </div>
        <div className="mt-5 md:m-0 md:w-9/12">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
      <Navigator></Navigator>
    </div>
  );
}

export default Home;
