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
  SkillsContainer,
  ContentContainer,
  IntroSlideIn,
  SkillsBox,
  SkillsRectangle,
  SkillsTitle
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
            I'm a design-oriented developer currently interning as a Web
            Developer at{' '}
            <a href="https://www.thehumaneleague.com">The Humane League</a>. I
            love to build mobile-first websites and apps from scratch and am
            focusing on increasing my React.js and CSS grid skills.
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
                <a href="/">Home</a>
              </li>
              <li>About</li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>Contact</li>
            </ul>
          </Nav>
          <ContentContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContainer>
              <SkillsBox>
                Languages <br />
                <br /> Javascript(ES6) <br /> CSS/Sass <br /> HTML
              </SkillsBox>
              <SkillsBox>
                Libraries <br />
                <br /> React <br /> Middleman <br /> jQuery
              </SkillsBox>
              <SkillsBox>
                Development practices <br />
                <br /> Mobile and responsive design <br /> BEM Methodology{' '}
                <br /> RESTful API's <br /> Flexbox <br /> Styled Components{' '}
                <br /> AJAX <br /> Oauth <br /> Git + Github <br /> Linux
                command line <br /> Chrome Dev Tools <br /> lodash
              </SkillsBox>
              <SkillsBox>
                Knowledge of: <br />
                <br /> Wordpress <br /> Rails <br />node.js <br /> mongoDB{' '}
                <br /> express soft skills communication, transparency,
                resourceful, big advocate for weekly meet ups and sharing what
                you are learning by teaching others
              </SkillsBox>
              <SkillsRectangle>
                Currently learning: <br />
                <br /> React <br /> CSS Grid
              </SkillsRectangle>
            </SkillsContainer>
          </ContentContainer>
        </Intro>
        <Fissure src={FissureGraphic} />
      </HomeContainer>
    );
  }
}
