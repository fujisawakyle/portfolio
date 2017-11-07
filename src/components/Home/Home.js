import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../../theme/grid/Container';

import { Name, HeroImage, HeroText } from './Home.style';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HeroImage
          src={require('../../assets/images/kyle.jpg')}
          alt="Kyle hero image"
        />
        <HeroText>
          Hello there! <br /> I'm <Name>Kyle</Name>
        </HeroText>
        <p>Here's the story of how I became a developer...</p>
      </Container>
    );
  }
}
