import Waypoint from 'react-waypoint';
import React, { Component } from 'react';

class WhenInView extends Component {
  state = {
    isInView: false
  };

  onEnterTop = ({ previousPosition, currentPosition }) => {
    console.log('ENTERTOP previousPosition', previousPosition);
    console.log('ENTERTOP currentPosition', currentPosition);
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  };

  onEnterBottom = ({ previousPosition, currentPosition }) => {
    console.log('ENTERBOT previousPosition', previousPosition);
    console.log('ENTERBOT currentPosition', currentPosition);
    if (previousPosition === Waypoint.above) {
      this.setState({
        isInView: true
      });
    }
  };

  onLeaveTop = ({ previousPosition, currentPosition }) => {
    console.log('LEAVETOP previousPosition', previousPosition);
    console.log('LEAVETOP currentPosition', currentPosition);
    if (currentPosition === Waypoint.below) {
      this.setState({
        isInView: false
      });
    }
  };

  onLeaveBottom = ({ previousPosition, currentPosition }) => {
    console.log('LEAVEBOT previousPosition', previousPosition);
    console.log('LEAVEBOT currentPosition', currentPosition);
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
