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
  SkillsTitle,
  SkillsBoxIconContainer
} from './Home.style';

import BoatGraphic from '../../assets/graphics/Boat.svg';
import BubbleGraphic from '../../assets/graphics/bubble.svg';
import RaysGraphic from '../../assets/graphics/sunshine4u.svg';
import JSfile from '../../assets/graphics/JSfile.svg';
import HTMLfile from '../../assets/graphics/HTMLfile.svg';
import CSSfile from '../../assets/graphics/CSSfile.svg';

import MediflectionAppImg from '../../assets/images/projects/MediflectionApp.png';
import WeatherAppImg from '../../assets/images/projects/WeatherApp.png';
import ResumeAppImg from '../../assets/images/projects/ResumeApp.png';
import CalculatorAppImg from '../../assets/images/projects/CalculatorApp.png';

import {
  ProjectContainer,
  ProjectImage,
  RevealLeft,
  Panels,
  Panel,
  ResumeApp,
  WeatherApp,
  CalculatorApp,
  MediflectionApp
} from '../Projects/Projects.style';
import WhenInView from '../WhenInView/WhenInView';
import classnames from 'classnames';
import img1 from '../../assets/images/projects/WeatherApp.png';
import RedCloud from '../../assets/graphics/RedCloud.svg';
import rightArrow from '../../assets/graphics/arrow-right.svg';
import Boat3 from '../../assets/graphics/Boat.svg';

export default class Home extends Component {
  state = {
    open: false
  };
  revealProject = () => {
    alert('yah');
  };
  render() {
    let showclasses = classnames('panel', 'panelmid', {
      open: this.state.open
    });
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
            <SkillsTitle>Projects</SkillsTitle>
            <ProjectContainer>
              <WhenInView>
                {({ isInView }) => (
                  <RevealLeft hide={!isInView}>
                    <a href="https://mediflection.herokuapp.com">
                      <img src={MediflectionAppImg} style={{ width: '80%' }} />
                    </a>
                  </RevealLeft>
                )}
              </WhenInView>

              <WhenInView>
                {({ isInView }) => (
                  <RevealLeft hide={!isInView}>
                    <a href="https://kyleresume-300a6.firebaseapp.com/">
                      <img src={ResumeAppImg} style={{ width: '80%' }} />
                    </a>
                  </RevealLeft>
                )}
              </WhenInView>

              <WhenInView>
                {({ isInView }) => (
                  <RevealLeft hide={!isInView}>
                    <a href="https://fujisawakyle.github.io/projects/weather/">
                      <img src={WeatherAppImg} style={{ width: '80%' }} />
                    </a>
                  </RevealLeft>
                )}
              </WhenInView>

              <WhenInView>
                {({ isInView }) => (
                  <RevealLeft hide={!isInView}>
                    <a href="https://fujisawakyle.github.io/projects/calculator/">
                      <img src={CalculatorAppImg} style={{ width: '80%' }} />
                    </a>
                  </RevealLeft>
                )}
              </WhenInView>

              {/* <a href="https://mediflection.herokuapp.com">
                <MediflectionApp>
                  <WhenInView>
                    {({ isInView }) => (
                      <Panels>
                         <img style={{ width: '50%' }} src={RedCloud} /> 
                        <Panel hide={isInView} />

                        <Panel show={isInView} className={showclasses} />

                        <Panel hide={isInView} />
                      </Panels>
                    )}
                  </WhenInView>
                </MediflectionApp>
              </a> */}
            </ProjectContainer>

            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContainer>
              <SkillsBox>
                Languages
                <br /> <br />
                <SkillsBoxIconContainer>
                  <img src={JSfile} style={{ width: '30%' }} />
                  <img src={HTMLfile} style={{ width: '30%' }} />
                  <img src={CSSfile} style={{ width: '30%' }} />
                </SkillsBoxIconContainer>
              </SkillsBox>
              <SkillsBox>
                Libraries <br />
                <br /> React <br /> Middleman <br /> jQuery
              </SkillsBox>
              <SkillsBox>
                Development practices <br />
                <br /> responsive design <br /> Git + Github <br /> BEM
                Methodology <br /> RESTful API's <br /> Flexbox <br /> AJAX{' '}
                <br /> Oauth <br /> Linux command line <br /> Chrome Dev Tools{' '}
                <br /> Lodash
              </SkillsBox>
              <SkillsBox>
                Knowledge of: <br />
                <br /> Wordpress <br /> Rails <br />node.js <br /> mongoDB{' '}
                <br /> express
              </SkillsBox>
              <SkillsRectangle>
                Currently learning: <br />
                <br /> React <br /> CSS Grid <br /> Styled Components <br />
              </SkillsRectangle>
            </SkillsContainer>
          </ContentContainer>
        </Intro>
        <Fissure src={FissureGraphic} />
      </HomeContainer>
    );
  }
}
