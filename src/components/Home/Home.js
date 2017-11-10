import React, { Component } from 'react';
import styled from 'styled-components';
import downArrow from '../../assets/graphics/arrow-down.svg';

import {
  DownArrow,
  Header,
  Hero,
  Name,
  HeroImage,
  HeroText,
  WelcomeText,
  Wave,
  Boat,
  HomeContainer,
  Bubble0
} from './Home.style';

import BoatGraphic from '../../assets/graphics/Boat.svg';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Hero>
          <Wave />
          <Boat src={BoatGraphic} alt="boat sailing to right" />
          {/* <Boat2 src={BoatGraphic} width="6em" alt="Boat" /> */}
          <DownArrow src={downArrow} alt="down arrow" />
          <WelcomeText>Hello there!</WelcomeText>
          <Bubble0 src={'http://placehold.it/100x100'} />
        </Hero>

        {/* <HeroImage
          src={require('../../assets/images/kyle.jpg')}
          alt="Kyle hero image"
          />
          <br /> I'm <Name>Kyle</Name>
           */}

        <p>
          I'm a front-end developer based in Anaheim, CA. I love building
          mobile-first websites and apps from scratch. I'm currently focused on
          increasing my skills in React.js.{' '}
        </p>
        <p>My skills include git, GitHub, BEM, CSS(Sass), ES6, API's</p>
      </HomeContainer>
    );
  }
}
