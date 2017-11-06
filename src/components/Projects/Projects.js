import React, { Component } from 'react';
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
} from './Projects.style';
import WhenInView from '../WhenInView/WhenInView';
import classnames from 'classnames';
import img1 from '../../assets/images/projects/WeatherApp.png';
import RedCloud from '../../assets/graphics/RedCloud.svg';

export default class Projects extends Component {
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
      <div>
        <h1>Projects</h1>
        <ProjectContainer>
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <a href="https://mediflection.herokuapp.com">
            <MediflectionApp>
              <WhenInView>
                {({ isInView }) => (
                  <Panels>
                    {/* <img style={{ width: '50%' }} src={RedCloud} /> */}
                    <Panel hide={isInView} />

                    <Panel show={isInView} className={showclasses} />

                    <Panel hide={isInView} />
                  </Panels>
                )}
              </WhenInView>
            </MediflectionApp>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <ResumeApp>
            <WhenInView>
              {({ isInView }) => (
                <Panels>
                  <Panel hide={isInView} />

                  <Panel show={isInView} className={showclasses} />

                  <Panel hide={isInView} />
                </Panels>
              )}
            </WhenInView>
          </ResumeApp>
          <br />
          <br />
          <br />
          <br />
          <br />
          <WeatherApp>
            <WhenInView>
              {({ isInView }) => (
                <Panels>
                  <Panel hide={isInView} />

                  <Panel show={isInView} className={showclasses} />

                  <Panel hide={isInView} />
                </Panels>
              )}
            </WhenInView>
          </WeatherApp>
          <br />
          <br />
          <br />
          <br />
          <br />
          <CalculatorApp>
            <WhenInView>
              {({ isInView }) => (
                <Panels>
                  <Panel hide={isInView} />

                  <Panel show={isInView} className={showclasses} />

                  <Panel hide={isInView} />
                </Panels>
              )}
            </WhenInView>
          </CalculatorApp>
          <br />
          <br />
          <br />
          <br />
          <br />
          <WhenInView>
            {({ isInView }) => (
              <RevealLeft hide={!isInView}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sapien ipsum, gravida in condimentum id, volutpat sit
                amet mi. Phasellus ex turpis, venenatis ut ultrices vitae,
                posuere eget velit. Nullam ut sagittis ipsum. Donec sollicitudin
                est vel eros dictum, vitae semper nibh sagittis. Suspendisse
                blandit quam sed bibendum eleifend. Etiam sodales semper enim,
                quis faucibus lacus convallis at. Nunc fermentum tellus vitae
                justo dignissim blandit. Suspendisse maximus sed eros quis
                tempus. Pellentesque rutrum mollis metus, quis elementum mi
                ultricies et. Quisque mattis justo nec ipsum consectetur
                malesuada.
              </RevealLeft>
            )}
          </WhenInView>
          <WhenInView>
            {({ isInView }) => (
              <RevealLeft hide={!isInView}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sapien ipsum, gravida in condimentum id, volutpat sit
                amet mi. Phasellus ex turpis, venenatis ut ultrices vitae,
                posuere eget velit. Nullam ut sagittis ipsum. Donec sollicitudin
                est vel eros dictum, vitae semper nibh sagittis. Suspendisse
                blandit quam sed bibendum eleifend. Etiam sodales semper enim,
                quis faucibus lacus convallis at. Nunc fermentum tellus vitae
                justo dignissim blandit. Suspendisse maximus sed eros quis
                tempus. Pellentesque rutrum mollis metus, quis elementum mi
                ultricies et. Quisque mattis justo nec ipsum consectetur
                malesuada.
              </RevealLeft>
            )}
          </WhenInView>
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
          <ProjectImage
            onClick={this.revealProject}
            src="http://placehold.it/300x300"
          />
        </ProjectContainer>
      </div>
    );
  }
}
