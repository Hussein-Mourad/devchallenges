import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./themeContext";
import { Navigator } from "./components/Navigator.js";
import { CardPersonal } from "./components/CardPersonal.js";
import { CardProject } from "./components/CardProject.js";
import { CardSkills } from "./components/CardSkills.js";
import { CardHobbies } from "./components/CardHobbies.js";
import { CardProjectsSelector } from "./components/CardProjectsSelector.js";
import { DarkModeSwitch } from "./components/DarkModeSwitch.js";
import { Footer } from "./components/Footer.js";
import { objects } from "./objects.js";

function App() {
  const [projects] = useState(objects);
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
  const paginate = (pageNumber, previous, next) => {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;
    if (previous) {
      setCurrentPage(previousPage);
    } else if (next) {
      setCurrentPage(nextPage);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <ThemeProvider>
      <div className="md:container lg:px-20 p-2 lg:py-3 mx-auto ">
        <DarkModeSwitch />
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
          currentPage={currentPage}
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
          paginate={paginate}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
