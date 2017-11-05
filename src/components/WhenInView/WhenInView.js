import Waypoint from 'react-waypoint';
import React, { Component } from 'react';

class WhenInView extends Component {
  state = {
    isInView: false
  };

  onEnterTop = ({ previousPosition, currentPosition }) => {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  };

  onEnterBottom = ({ previousPosition, currentPosition }) => {
    if (previousPosition === Waypoint.above) {
      this.setState({
        isInView: true
      });
    }
  };

  onLeaveTop = ({ previousPosition, currentPosition }) => {
    if (currentPosition === Waypoint.below) {
      this.setState({
        isInView: false
      });
    }
  };

  onLeaveBottom = ({ previousPosition, currentPosition }) => {
    if (currentPosition === Waypoint.above) {
      this.setState({
        isInView: false
      });
    }
  };
  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnterTop} onLeave={this.onLeaveTop} />
        {this.props.children({ isInView: this.state.isInView })}
        <Waypoint onLeave={this.onLeaveBottom} onEnter={this.onEnterBottom} />
      </div>
    );
  }
}

export default WhenInView;
