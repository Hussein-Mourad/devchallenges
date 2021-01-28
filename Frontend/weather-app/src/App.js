import { createContext } from 'react'
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import { HighlightsCard } from "./components/HighlightsCard";
import { SideDrawer } from "./components/SideDrawer";
import useFetch from "./api/useFetch";
import getUserLocation from "./utils/getUserLocation";
import { info } from './data';


function App() {
  // getUserLocation();
  // const { data, isLoading, error, loadData } = useFetch(
  //   "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/1522006"
  // );
  const data = info;
  console.log(data);
  const WeatherContext = createContext();
  
  return (
    <WeatherContext.Provider value={data}>
      <SideDrawer></SideDrawer>
      <div className="absolute top-0 right-0 w-4/5">
        <WeatherCard
          day="Tomorrow"
          maxDegree="16 &deg;C"
          minDegree="11 &deg;C"
        ></WeatherCard>
        <HighlightsCard name="Wind Status" text="7"></HighlightsCard>
        <Footer />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
