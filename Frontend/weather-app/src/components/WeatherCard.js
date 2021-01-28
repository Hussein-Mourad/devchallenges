import { Component } from "react";


class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: this.props.img,
      day: this.props.day,
      maxDegree: this.props.maxDegree,
      minDegree: this.props.minDegree,
      value: this.context
    };
  }
  
  render() {
    
    console.log('value: ', this.state.value);
    return (
      <div className="flex flex-col items-center bg-blueGray-800 w-32 p-5 font-medium m-1">
        <h1 className="text-coolGray-200">{this.state.day}</h1>
        <img className="my-2" src={this.state.img} alt="" />
        <div className="flex justify-between w-full">
          <p className="text-coolGray-200">{this.state.maxDegree}</p>
          <p className="text-coolGray-400">{this.state.minDegree}</p>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
