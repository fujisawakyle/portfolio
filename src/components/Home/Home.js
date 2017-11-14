import React, { Component } from 'react';
import styled from 'styled-components';
import downArrow from '../../assets/graphics/arrow-down.svg';
import FissureGraphic from '../../assets/graphics/fissure.svg';
import {
  DownArrow,
  Nav,
  Hero,
  Name,
  HeroImage,
  HeroText,
  WelcomeText,
  Wave,
  Boat,
  HomeContainer,
  Bubble0,
  Bubble1,
  Bubble2,
  Bubble3,
  Bubble4,
  Bubble5,
  Fissure,
  Sun,
  Rays,
  Intro,
  Footer,
  IntroP,
  ContentContainer,
  IntroSlideIn,
  SkillsBox
} from './Home.style';

import BoatGraphic from '../../assets/graphics/Boat.svg';
import BubbleGraphic from '../../assets/graphics/bubble.svg';
import RaysGraphic from '../../assets/graphics/samplerays.svg';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Hero>
          <Rays src={RaysGraphic} alt="rays" />
          <Wave />
          <Boat src={BoatGraphic} alt="boat sailing to right" />
          {/* <Boat2 src={BoatGraphic} alt="Boat" /> */}
          <DownArrow src={downArrow} alt="down arrow" />
          <WelcomeText>Hello there!</WelcomeText>
          <IntroSlideIn>
            I'm a design-oriented front end developer based in Orange County,
            CA. I love building mobile-first websites and apps from scratch. I'm
            currently focused on increasing my skills in React.js and CSS grid.
          </IntroSlideIn>
        </Hero>
        <Bubble0 src={BubbleGraphic} />
        <Bubble1 src={BubbleGraphic} />
        <Bubble2 src={BubbleGraphic} />
        <Bubble3 src={BubbleGraphic} />
        <Bubble4 src={BubbleGraphic} />
        <Bubble5 src={BubbleGraphic} />
        {/* <HeroImage
          src={require('../../assets/images/kyle.jpg')}
          alt="Kyle hero image"
          />
          <br /> I'm <Name>Kyle</Name>
           */}

        <Intro>
          <Nav>
            <ul>
              <li>
                <a href="/projects">Home</a>
              </li>
              <li>About</li>
              <li>
                <a href="/projects">Project</a>
              </li>
              <li>Contact</li>
            </ul>
          </Nav>
          Skills
          <ContentContainer>
            <SkillsBox>
              Languages <br />
              <br /> Javascript(ES6) CSS/Sass HTML
            </SkillsBox>
            <SkillsBox>
              Libraries <br />
              <br /> React Middleman jQuery
            </SkillsBox>
            <SkillsBox>
              Development practices <br />
              <br /> Mobile and responsive design, BEM Methodology, RESTful
              API's , Flexbox, Styled Components, AJAX, Oauth, Git + Github
              Linux command line, Chrome Dev Tools, lodash
            </SkillsBox>
            <SkillsBox>
              Knowledge of: <br />
              <br /> wordpress, some rails, some node.js, mongoDB, express soft
              skills communication, transparency, resourceful, big advocate for
              weekly meet ups and sharing what you are learning by teaching
              others
            </SkillsBox>
          </ContentContainer>
        </Intro>
        <Fissure src={FissureGraphic} />
      </HomeContainer>
    );
  }
}
