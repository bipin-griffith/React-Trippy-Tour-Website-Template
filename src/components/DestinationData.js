import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="desc-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="desc-img">
          <img src={this.props.img1} alt="destination" />
          <img src={this.props.img2} alt="destination" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
