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
        <p>
          I'm a front-end developer based in Anaheim, CA. I love building
          mobile-first websites and apps from scratch. I'm currently focused on
          increasing my skills in React.js.{' '}
        </p>
        <p>My skills include git, GitHub, BEM, CSS(Sass), ES6, API's</p>
      </Container>
    );
  }
}
