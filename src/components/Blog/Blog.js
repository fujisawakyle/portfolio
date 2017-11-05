import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  toggleOpen = event => {
    this.setState({ open: true });
  };

  render() {
    return <div />;
  }
}
