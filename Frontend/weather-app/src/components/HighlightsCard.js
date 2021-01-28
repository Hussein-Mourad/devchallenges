import { Component } from "react";

export class HighlightsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      text: this.props.text,
      children: this.props.children,
    };
  }

  render() {
    return (
      <div className="flex flex-col items-center bg-blueGray-800 w-64 p-5 font-medium text-coolGray-200 m-1">
        <p>{this.state.name}</p>
        <p className="font-bold text-5xl">{this.state.text}</p>
        {this.state.children}
      </div>
    );
  }
}

export default HighlightsCard;
