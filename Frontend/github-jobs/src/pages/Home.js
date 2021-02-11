import SearchBar from "./../components/SearchBar";
import SearchFilter from "./../components/SearchFilter";
import JobCard from "./../components/JobCard";

function Home() {
  return (
    <div>
      <SearchBar />
      <div className="flex mt-10">
        <div className="w-3/12 mr-10">
          <SearchFilter />
        </div>
        <div className="w-9/12">
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
