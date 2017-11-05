import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../../theme/grid/Container';

const Image = styled.img`
  width: 100%;
  max-width: 40em;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <h1>Hello there! I'm Kyle</h1>
        <Image
          src={require('../../assets/images/kyle.jpg')}
          alt="Kyle hero image"
        />
        <p>Pariatur laborum nostrud pariatur nulla irure aute velit.</p>
      </Container>
    );
  }
}
