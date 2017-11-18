import React, { Component } from 'react';
import styled from 'styled-components';
import downArrow from '../../assets/graphics/arrow-down.svg';
import FissureGraphic from '../../assets/graphics/fissure.svg';
import {
  DownArrow,
  Nav,
  SideBar,
  Contact,
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
  SkillsBoxIconContainer,
  SkillsItemContainer,
  SkillsItem
} from './Home.style';

import BoatGraphic from '../../assets/graphics/Boat.svg';
import BubbleGraphic from '../../assets/graphics/bubble.svg';
import RaysGraphic from '../../assets/graphics/sunshine4u.svg';
import JSfile from '../../assets/graphics/JSfile.svg';
import HTMLfile from '../../assets/graphics/HTMLfile.svg';
import CSSfile from '../../assets/graphics/CSSfile.svg';
import reactLogo from '../../assets/graphics/reactLogo.svg';
import middlemanLogo from '../../assets/graphics/middlemanLogo.svg';
import jQueryLogo from '../../assets/graphics/jQueryLogo.svg';

import DardenWebsiteImg from '../../assets/images/projects/dardenWebsite.png';
import BigAndFreshWebsiteImg from '../../assets/images/projects/bigandfreshWebiste.png';
import MediflectionAppImg from '../../assets/images/projects/MediflectionApp.png';
import WeatherAppImg from '../../assets/images/projects/WeatherApp.png';
import ResumeAppImg from '../../assets/images/projects/ResumeApp.png';
import CalculatorAppImg from '../../assets/images/projects/CalculatorApp.png';

import {
  Projects,
  ProjectInfoContainer,
  ProjectContainer,
  ProjectTitle,
  ProjectDescriptionRight,
  ProjectDescriptionLeft,
  ProjectImage,
  ImageRightContainer,
  WorkProjects,
  RevealFromLeft,
  RevealFromRight,
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
        {/* <Bubble0 src={BubbleGraphic} />
        <Bubble1 src={BubbleGraphic} />
        <Bubble2 src={BubbleGraphic} />
        <Bubble3 src={BubbleGraphic} />
        <Bubble4 src={BubbleGraphic} />
        <Bubble5 src={BubbleGraphic} /> */}
        {/* <HeroImage
          src={require('../../assets/images/kyle.jpg')}
          alt="Kyle hero image"
          />
          <br /> I'm <Name>Kyle</Name>
           */}
        <Intro>
          <SideBar>
            <Nav>
              <div>
                <a href="/">Home</a>
              </div>
              <div>About</div>
              <div>
                <a href="/projects">Projects</a>
              </div>
              <div>Contact</div>
            </Nav>

            <Contact>
              <div>hd</div>
              <div>hello2</div>
            </Contact>
          </SideBar>
          <ContentContainer>
            <Projects>
              <SkillsTitle>Work Projects</SkillsTitle>
              <WorkProjects>
                <ProjectContainer>
                  <WhenInView>
                    {({ isInView }) => (
                      <RevealFromLeft hide={!isInView}>
                        <a href="https://dardenbrands.com">
                          <img
                            src={DardenWebsiteImg}
                            style={{ width: '80%' }}
                          />
                        </a>
                      </RevealFromLeft>
                    )}
                  </WhenInView>

                  <ProjectInfoContainer>
                    <ProjectTitle>Darden Cruelty</ProjectTitle>
                    <ProjectDescriptionRight>
                      Created this site based on the mockup provided by the team
                      designer. Worked with the Twitter API to build a custom
                      tweet display.
                    </ProjectDescriptionRight>
                  </ProjectInfoContainer>
                </ProjectContainer>
                <ProjectContainer>
                  <ImageRightContainer>
                    <WhenInView style={{ order: '1' }}>
                      {({ isInView }) => (
                        <RevealFromRight hide={!isInView}>
                          <a href="http://campaigns-staging.thehumaneleague.com/big-and-fresh">
                            <img
                              src={BigAndFreshWebsiteImg}
                              style={{ width: '80%' }}
                            />
                          </a>
                        </RevealFromRight>
                      )}
                    </WhenInView>
                  </ImageRightContainer>
                  <ProjectInfoContainer>
                    <ProjectDescriptionLeft>
                      Built a new twitter and instagram feed for the custom CMS.
                    </ProjectDescriptionLeft>
                    <ProjectTitle>Social Feed</ProjectTitle>
                  </ProjectInfoContainer>
                </ProjectContainer>
              </WorkProjects>
              <SkillsTitle>Personal Projects</SkillsTitle>
              <ProjectContainer>
                <WhenInView>
                  {({ isInView }) => (
                    <RevealFromLeft hide={!isInView}>
                      <a href="https://mediflection.herokuapp.com">
                        <img
                          src={MediflectionAppImg}
                          style={{ width: '80%' }}
                        />
                      </a>
                    </RevealFromLeft>
                  )}
                </WhenInView>
                <ProjectInfoContainer>
                  <ProjectTitle>Mediflection</ProjectTitle>
                  <ProjectDescriptionRight>
                    Built using MERN stack app (Redux) with Google Oauth sign
                    in. Custom UI/UX design using third party calendar and graph
                    libraries.
                  </ProjectDescriptionRight>
                </ProjectInfoContainer>
              </ProjectContainer>
              <ProjectContainer>
                <ImageRightContainer>
                  <WhenInView>
                    {({ isInView }) => (
                      <RevealFromRight hide={!isInView}>
                        <a href="https://kyleresume-300a6.firebaseapp.com/">
                          <img src={ResumeAppImg} style={{ width: '80%' }} />
                        </a>
                      </RevealFromRight>
                    )}
                  </WhenInView>
                </ImageRightContainer>
                <ProjectInfoContainer>
                  <ProjectDescriptionLeft>
                    My first React.js and firebasehosting app.
                  </ProjectDescriptionLeft>
                  <ProjectTitle>Online Resume</ProjectTitle>
                </ProjectInfoContainer>
              </ProjectContainer>
              <ProjectContainer>
                <WhenInView>
                  {({ isInView }) => (
                    <RevealFromLeft hide={!isInView}>
                      <a href="https://fujisawakyle.github.io/projects/weather/">
                        <img src={WeatherAppImg} style={{ width: '80%' }} />
                      </a>
                    </RevealFromLeft>
                  )}
                </WhenInView>
                <ProjectInfoContainer>
                  <ProjectTitle>Local Weather</ProjectTitle>
                  <ProjectDescriptionRight>
                    Used openweathermap API to gather local weather. Custom UI
                    design.
                  </ProjectDescriptionRight>
                </ProjectInfoContainer>
              </ProjectContainer>

              <ProjectContainer>
                <ImageRightContainer>
                  <WhenInView>
                    {({ isInView }) => (
                      <RevealFromRight hide={!isInView}>
                        <a href="https://fujisawakyle.github.io/projects/calculator/">
                          <img
                            src={CalculatorAppImg}
                            style={{ width: '80%' }}
                          />
                        </a>
                      </RevealFromRight>
                    )}
                  </WhenInView>
                </ImageRightContainer>
                <ProjectInfoContainer>
                  <ProjectDescriptionLeft>
                    Custom UI and functional calculator
                  </ProjectDescriptionLeft>
                  <ProjectTitle>Calculator</ProjectTitle>
                </ProjectInfoContainer>
              </ProjectContainer>
            </Projects>

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

            <SkillsTitle>Skills</SkillsTitle>
            <SkillsContainer>
              <SkillsBox>
                Languages
                <br /> <br />
                <SkillsBoxIconContainer>
                  <img src={JSfile} style={{ width: '26.6%' }} />
                  <img src={HTMLfile} style={{ width: '26.6%' }} />
                  <img src={CSSfile} style={{ width: '26.6%' }} />
                </SkillsBoxIconContainer>
              </SkillsBox>
              <SkillsBox>
                Libraries <br />
                <br />
                <SkillsBoxIconContainer>
                  <img src={reactLogo} style={{ width: '25%' }} />
                  <img src={middlemanLogo} style={{ width: '25%' }} />
                  <img src={jQueryLogo} style={{ width: '30%' }} />
                </SkillsBoxIconContainer>
              </SkillsBox>
              <SkillsBox>
                Development<br />
                <SkillsItemContainer>
                  <SkillsItem>Responsive Design</SkillsItem>
                  <SkillsItem>Git + Github</SkillsItem>
                  <SkillsItem>BEM Methodology</SkillsItem>
                  <SkillsItem>Flexbox</SkillsItem>
                  <SkillsItem>Chrome Dev Tools</SkillsItem>
                  <SkillsItem>Linux command line</SkillsItem>
                  <SkillsItem>Lodash</SkillsItem>
                </SkillsItemContainer>
              </SkillsBox>
              <SkillsBox>
                Knowledge of: <br />
                <SkillsItemContainer>
                  <SkillsItem>RESTful API</SkillsItem>
                  <SkillsItem>Wordpress</SkillsItem>
                  <SkillsItem>Rails</SkillsItem>
                  <SkillsItem>Node.js</SkillsItem>
                  <SkillsItem>express</SkillsItem>
                  <SkillsItem>mongoDB</SkillsItem>
                  <SkillsItem>Oauth</SkillsItem>
                </SkillsItemContainer>
              </SkillsBox>
              <SkillsRectangle>
                Currently learning: <br />
                <SkillsItemContainer>
                  <SkillsItem>CSS Grid</SkillsItem>
                  <SkillsItem>Styled Components</SkillsItem>
                  <SkillsItem>TDD (Jest, Mocha)</SkillsItem>
                </SkillsItemContainer>
              </SkillsRectangle>
            </SkillsContainer>
          </ContentContainer>
        </Intro>
        <Fissure src={FissureGraphic} />
      </HomeContainer>
    );
  }
}
