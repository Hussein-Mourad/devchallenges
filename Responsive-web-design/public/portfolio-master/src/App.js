import React, { useState } from "react";
import "./App.css";
import { Navigator } from "./components/Navigator.js";
import { CardPersonal } from "./components/CardPersonal.js";
import { CardProject } from "./components/CardProject.js";
import { CardSkills } from "./components/CardSkills.js";
import { CardHobbies } from "./components/CardHobbies.js";
import { CardProjectsSelector } from "./components/CardProjectsSelector.js";
import { objects } from "./objects.js";

function App() {
  const [projects, setProjects] = useState(objects);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);

  // Gets current Projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previousPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <div className="md:container lg:px-20 p-2 lg:py-3 mx-auto ">
      <CardPersonal width="full" />
      <CardSkills />
      <CardHobbies />
      <CardProjectsSelector totalProjects={projects.length} />
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentProjects.map((project) => (
          <CardProject data={project.data} key={project.id} />
        ))}
      </div>
      <Navigator
        projectsPerPage={projectsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default App;
