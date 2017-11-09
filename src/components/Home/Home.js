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
  Wave
} from './Home.style';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero>
          <Wave />
          <DownArrow src={downArrow} width="1em" alt="Google" />
        </Hero>
        <HeroText>Hello there!</HeroText>
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
      </div>
    );
  }
}
