import SearchBar from "./../components/SearchBar";
import SearchFilter from "./../components/SearchFilter";
import JobCard from "./../components/JobCard";
import Navigator,{Nav} from "./../components/Navigator";
import { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

function Home() {
  var list = [];
  for (var i = 1; i <= 100; i++) {
    list.push(i);
  }
  const [projects] = useState(list);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);

  // Gets current Projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <div>
      <SearchBar />
      <div className="md:flex mt-5 ">
        <div className="md:w-3/12 md:mr-10">
          <SearchFilter />
        </div>
        <div className="mt-5 md:m-0 md:w-9/12">
          {currentProjects.map((p) => (
            <div className="w-full h-20 my-4 border border-blue-400">{p}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-end">
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
        />
        
        <Navigator/>
        <Pagination
          count={projects.length}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          variant="outlined"
          shape="rounded"
          color="#333"
        />
      </div>
    </div>
  );
}

export default Home;
