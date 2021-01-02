import "./App.css";
import { Navigator } from "./components/Navigator.js";
import { CardPersonal } from "./components/CardPersonal.js";
import { CardProject } from "./components/CardProject.js";
import { CardSkills } from "./components/CardSkills.js";
import { CardHobbies } from "./components/CardHobbies.js";
import { CardProjectsSelector } from "./components/CardProjectsSelector.js";

function App() {
  return (
    <div className="container px-20 py-3 mx-auto">
      <CardPersonal width="full" />
      <CardSkills />
      <CardHobbies />
      <CardProjectsSelector />
      <div className="grid grid-cols-3 gap-5">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <Navigator />
    </div>
  );
}

export default App;
