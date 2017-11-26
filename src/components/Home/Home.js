import React, { Component } from 'react';

import Data from '../../data/Data.json';

import {
  DownArrow,
  Nav,
  SideBar,
  Contact,
  ContactIcon,
  Hero,
  WelcomeText,
  Wave,
  Boat,
  HomeContainer,
  Sand,
  Crab,
  Rays,
  Intro,
  SkillsContainer,
  ContentContainer,
  IntroSlideIn,
  SkillsBox,
  SkillsRectangle,
  SectionTitle,
  SkillsBoxIconContainer,
  SkillsItemContainer,
  SkillsItem,
  ContactContainer,
  ContactIconContainer
} from './Home.style';

import downArrow from '../../assets/graphics/arrow-down.svg';
import BoatGraphic from '../../assets/graphics/Boat.svg';
import RaysGraphic from '../../assets/graphics/sunshine4u.svg';
import JSfile from '../../assets/graphics/JSfile.svg';
import HTMLfile from '../../assets/graphics/HTMLfile.svg';
import CSSfile from '../../assets/graphics/CSSfile.svg';
import reactLogo from '../../assets/graphics/reactLogo.svg';
import middlemanLogo from '../../assets/graphics/middlemanLogo.svg';
import jQueryLogo from '../../assets/graphics/jQueryLogo.svg';
import githubIcon from '../../assets/graphics/Octocat.png';
import linkedinIcon from '../../assets/graphics/linkedin.png';
import emailIcon from '../../assets/graphics/email.svg';
import CrabGraphic from '../../assets/graphics/crab.svg';
import SandGraphic from '../../assets/graphics/sand.svg';

import DardenWebsiteImg from '../../assets/images/projects/dardenWebsite.png';
import BigAndFreshWebsiteImg from '../../assets/images/projects/bigandfreshWebsite.png';
import MailtoTrackerWebsiteImg from '../../assets/images/projects/mailtoTrackerWebsite.png';
import MediflectionAppImg from '../../assets/images/projects/MediflectionApp.png';
import WeatherAppImg from '../../assets/images/projects/WeatherApp.png';
import ResumeAppImg from '../../assets/images/projects/ResumeApp.png';
import CalculatorAppImg from '../../assets/images/projects/CalculatorApp.png';

import {
  Projects,
  ProjectImgContainer,
  ProjectInfoContainer,
  ProjectContainer,
  ProjectTitle,
  ProjectDescriptionRight,
  ProjectDescriptionLeft,
  ImageRightContainer,
  WorkProjects,
  RevealFromLeft,
  RevealFromRight
} from '../Projects/Projects.style';
import WhenInView from '../WhenInView/WhenInView';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';

let scroll = Scroll.animateScroll;

export default class Home extends Component {
  scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  render() {
    return (
      <HomeContainer>
        <Hero>
          <Rays src={RaysGraphic} alt="rays" />
          <Wave />
          <Boat src={BoatGraphic} alt="boat sailing to right" />
          {/* <Boat2 src={BoatGraphic} alt="Boat" /> */}
          <DownArrow src={downArrow} alt="down arrow" />
          <WelcomeText>{Data.about.header}</WelcomeText>
          <IntroSlideIn>
            I'm a design-oriented developer currently interning as a Web
            Developer with{' '}
            <a href="https://www.thehumaneleague.org">The Humane League</a>. I
            love to build mobile-first websites and apps from scratch and am
            focusing on increasing my React and CSS grid skills.
          </IntroSlideIn>
        </Hero>

        <Intro>
          <SideBar>
            <Nav>
              <div>
                <a onClick={() => scroll.scrollToTop()}>About</a>
              </div>
              <div>
                <a onClick={() => this.scrollTo('projects')}>Projects</a>
              </div>
              <div>
                <a onClick={() => this.scrollTo('skills')}>Skills</a>
              </div>
            </Nav>

            <Contact>
              <a href="mailto:fujisawakyle@gmail.com">
                <ContactIcon src={emailIcon} />
              </a>
              <a href="https://github.com/fujisawakyle">
                <ContactIcon src={githubIcon} />
              </a>
              <a href="https://linkedin.com/kylefujisawa">
                <ContactIcon src={linkedinIcon} />
              </a>
            </Contact>
          </SideBar>
          <ContentContainer>
            <a name="projects" />
            <Projects>
              <SectionTitle>Work Projects</SectionTitle>
              <WorkProjects>
                <ProjectContainer>
                  <ProjectImgContainer>
                    <WhenInView>
                      {({ isInView }) => (
                        <RevealFromLeft hide={!isInView}>
                          <a href="https://dardenbrands.com">
                            <img
                              src={DardenWebsiteImg}
                              alt="Darden Website Preview"
                              style={{ width: '80%' }}
                            />
                          </a>
                        </RevealFromLeft>
                      )}
                    </WhenInView>
                  </ProjectImgContainer>
                  <ProjectInfoContainer>
                    <ProjectTitle>{Data.projects.darden.title}</ProjectTitle>
                    <ProjectDescriptionRight>
                      {Data.projects.darden.description}
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
                              alt="Big and Fresh Website Preview"
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
                      {Data.projects.feed.description}
                    </ProjectDescriptionLeft>
                    <ProjectTitle>{Data.projects.feed.title}</ProjectTitle>
                  </ProjectInfoContainer>
                </ProjectContainer>
                <ProjectContainer>
                  <ProjectImgContainer>
                    <WhenInView>
                      {({ isInView }) => (
                        <RevealFromLeft hide={!isInView}>
                          <a href="http://thehumaneleague.org/url-builder">
                            <img
                              alt="Mailto Tracker Website Preview"
                              src={MailtoTrackerWebsiteImg}
                              style={{ width: '80%' }}
                            />
                          </a>
                        </RevealFromLeft>
                      )}
                    </WhenInView>
                  </ProjectImgContainer>
                  <ProjectInfoContainer>
                    <ProjectTitle>{Data.projects.tracker.title}</ProjectTitle>
                    <ProjectDescriptionRight>
                      {Data.projects.tracker.description}
                    </ProjectDescriptionRight>
                  </ProjectInfoContainer>
                </ProjectContainer>
              </WorkProjects>
              <SectionTitle>Personal Projects</SectionTitle>
              <ProjectContainer>
                <ProjectImgContainer>
                  <WhenInView>
                    {({ isInView }) => (
                      <RevealFromLeft hide={!isInView}>
                        <a href="https://mediflection.herokuapp.com">
                          <img
                            alt="Mediflection App Preview"
                            src={MediflectionAppImg}
                            style={{ width: '80%' }}
                          />
                        </a>
                      </RevealFromLeft>
                    )}
                  </WhenInView>
                </ProjectImgContainer>
                <ProjectInfoContainer>
                  <ProjectTitle>
                    {Data.projects.mediflection.title}
                  </ProjectTitle>
                  <ProjectDescriptionRight>
                    {Data.projects.mediflection.description}
                  </ProjectDescriptionRight>
                </ProjectInfoContainer>
              </ProjectContainer>
              <ProjectContainer>
                <ImageRightContainer>
                  <WhenInView>
                    {({ isInView }) => (
                      <RevealFromRight hide={!isInView}>
                        <a href="https://kyleresume-300a6.firebaseapp.com/">
                          <img
                            alt="Resume App Preview"
                            src={ResumeAppImg}
                            style={{ width: '80%' }}
                          />
                        </a>
                      </RevealFromRight>
                    )}
                  </WhenInView>
                </ImageRightContainer>
                <ProjectInfoContainer>
                  <ProjectDescriptionLeft>
                    {Data.projects.resume.description}
                  </ProjectDescriptionLeft>
                  <ProjectTitle>{Data.projects.resume.title}</ProjectTitle>
                </ProjectInfoContainer>
              </ProjectContainer>
              <ProjectContainer>
                <ProjectImgContainer>
                  <WhenInView>
                    {({ isInView }) => (
                      <RevealFromLeft hide={!isInView}>
                        <a href="https://fujisawakyle.github.io/projects/weather/">
                          <img
                            alt="Resume App Preview"
                            src={WeatherAppImg}
                            style={{ width: '80%' }}
                          />
                        </a>
                      </RevealFromLeft>
                    )}
                  </WhenInView>
                </ProjectImgContainer>
                <ProjectInfoContainer>
                  <ProjectTitle>{Data.projects.weather.title}</ProjectTitle>
                  <ProjectDescriptionRight>
                    {Data.projects.weather.description}
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
                            alt="Calculator App Preview"
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
                    {Data.projects.calculator.description}
                  </ProjectDescriptionLeft>
                  <ProjectTitle>{Data.projects.weather.title}</ProjectTitle>
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

            <a name="skills" />
            <SectionTitle>Skills</SectionTitle>
            <SkillsContainer>
              <SkillsBox>
                Languages
                <br /> <br />
                <SkillsBoxIconContainer>
                  <img
                    src={JSfile}
                    alt="Javascript File Icon"
                    style={{ width: '26.6%' }}
                  />
                  <img
                    src={HTMLfile}
                    alt="HTML File Icon"
                    style={{ width: '26.6%' }}
                  />
                  <img
                    src={CSSfile}
                    alt="CSS File Icon"
                    style={{ width: '26.6%' }}
                  />
                </SkillsBoxIconContainer>
              </SkillsBox>
              <SkillsBox>
                Libraries <br />
                <br />
                <SkillsBoxIconContainer>
                  <img
                    src={reactLogo}
                    alt="React Logo"
                    style={{ width: '22%' }}
                  />
                  <img
                    src={middlemanLogo}
                    alt="Middleman Logo"
                    style={{ width: '20%' }}
                  />
                  <img
                    src={jQueryLogo}
                    alt="jQuery Logo"
                    style={{ width: '30%' }}
                  />
                </SkillsBoxIconContainer>
              </SkillsBox>
              <SkillsBox>
                Workflow<br />
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
                Knowledge of <br />
                <SkillsItemContainer>
                  <SkillsItem>RESTful API</SkillsItem>
                  <SkillsItem>Wordpress</SkillsItem>
                  <SkillsItem>Rails</SkillsItem>
                  <SkillsItem>Node.js</SkillsItem>
                  <SkillsItem>express</SkillsItem>
                  <SkillsItem>mongoDB</SkillsItem>
                  <SkillsItem>Oauth</SkillsItem>
                  <SkillsItem>Sketch 3</SkillsItem>
                </SkillsItemContainer>
              </SkillsBox>
              <SkillsRectangle>
                Currently learning <br />
                <SkillsItemContainer>
                  <SkillsItem>CSS Grid</SkillsItem>
                  <SkillsItem>Styled Components</SkillsItem>
                  <SkillsItem>TDD (Jest, Mocha)</SkillsItem>
                  <SkillsItem>Web Accesibility</SkillsItem>
                </SkillsItemContainer>
              </SkillsRectangle>
            </SkillsContainer>
            <ContactContainer>
              <SectionTitle>Contact</SectionTitle>
              <ContactIconContainer>
                <a href="mailto:fujisawakyle@gmail.com">
                  <img src={emailIcon} />
                </a>

                <a href="https://github.com/fujisawakyle">
                  <img src={githubIcon} />
                </a>

                <a href="https://linkedin.com/kylefujisawa">
                  <img src={linkedinIcon} />
                </a>
              </ContactIconContainer>
            </ContactContainer>
          </ContentContainer>
        </Intro>
        <div style={{ position: 'relative' }}>
          <Sand src={SandGraphic} />
          <Crab src={CrabGraphic} />
        </div>
      </HomeContainer>
    );
  }
}
