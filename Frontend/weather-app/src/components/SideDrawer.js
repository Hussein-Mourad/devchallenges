import { Component } from "react";
import background from "../assets/Cloud-background.png";
import Icon from "@material-ui/core/Icon";
export class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: this.props.img,
      temperature: this.props.temperature,
      climateState: this.props.climateState,
      date: this.props.date,
      location: this.props.location,
    };
  }

  render() {
    return (
      <div className="sm:fixed sm:top-0 sm:left-0 sm:w-1/5 w-full h-screen bg-blueGray-800 py-4 overflow-x-hidden">
        {/* <div className="w-screen h-screen bg-blueGray-800 fixed top-0 left-0 py-2 px-3">
          <div className="w-full flex justify-end text-coolGray-200 mb-4 cursor-pointer">
            <Icon>close</Icon>
          </div>
          <div className="inline-flex justify-between items-center w-full">
            <div className="p-2 mr-3 w-full inline-flex items-center border border-coolGray-400">
              <Icon className="text-coolGray-500 mr-2">search</Icon>
              <input
                type="text"
                className="text-coolGray-200 placeholder-gray-500 bg-transparent w-full"
                placeholder="search location"
              />
            </div>
            <button className="px-4 py-2 text-coolGray-200 bg-indigo-600 hover:bg-opacity-80 active:bg-indigo-700">
              Search
            </button>
          </div>
          <ul className="mt-4">
            <li className="group px-2 py-4 my-2 w-full inline-flex items-center justify-between text-coolGray-200 border border-transparent hover:border-coolGray-500 transition duration-100 cursor-pointer">
              <span>London</span>{" "}
              <Icon className="hidden group-hover:block transition duration-100 text-coolGray-500">
                chevron_right
              </Icon>
            </li>
          </ul>
        </div>
         */}
            
        <div className="px-3 flex items-center justify-between">
          <button className="px-4 py-2 bg-gray-500 text-coolGray-200">
            Search for places
          </button>
          <button className="rounded-full bg-gray-500 text-coolGray-200 w-10 h-10 inline-flex items-center justify-center">
            <Icon>gps_fixed</Icon>
          </button>
        </div>
        <div className="transform scale-150 absolute top-32">
          <img className="opacity-5 w-full" src={background} alt="" />
        </div>
      </div>
    );
  }
}

export default SideDrawer;
