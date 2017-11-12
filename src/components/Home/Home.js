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
  IntroSlideIn
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
            I'm a front-end developer based in Orange County, CA. I love
            building mobile-first websites and apps from scratch. I'm currently
            focused on increasing my skills in React.js.
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
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </Nav>
          <ContentContainer>
            <IntroP>
              I'm a front-end developer based in Orange County, CA. I love
              building mobile-first websites and apps from scratch. I'm
              currently focused on increasing my skills in React.js.
            </IntroP>
            <IntroP>
              My skills include git, GitHub, BEM, CSS(Sass), ES6, API's
            </IntroP>

            <IntroP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse pulvinar mi non imperdiet malesuada. Aliquam dolor
              erat, suscipit et condimentum sed, tincidunt sed diam. Mauris
              eleifend pulvinar iaculis. Donec vestibulum justo metus, vel
              ultrices leo consequat nec. Praesent sit amet pretium erat. Nullam
              scelerisque lorem eu tempus tempor. Sed auctor nunc sit amet est
              convallis pretium. Nam et convallis augue. Nulla lacus dui,
              tristique ut lobortis in, varius eu quam. Nunc rutrum nisi vitae
              nulla sollicitudin tristique. Cras aliquet dictum urna a
              tristique. Nulla vel eros mauris. Maecenas tincidunt turpis velit,
              at sollicitudin urna laoreet ut. Sed dapibus, erat eu tincidunt
              facilisis, turpis nibh varius diam, in ullamcorper ipsum nisi non
              risus. Ut fringilla, massa ac rutrum ultrices, lacus ante lobortis
              nunc, ac sagittis nunc leo non libero. Cras pretium mauris vel
              tortor vehicula, in egestas nisl consectetur. Proin ut tincidunt
              leo. In mattis gravida justo, et eleifend eros malesuada sed. Sed
              lacinia id est eu tristique. Morbi eu consequat arcu. Quisque eu
              tellus at neque condimentum ornare vel sit amet orci. Suspendisse
              vel lobortis eros. Suspendisse potenti. Fusce auctor tempus
              feugiat. Donec vel tortor sed nulla scelerisque molestie. Ut
              accumsan tortor eget ipsum aliquet, sed suscipit turpis
              consectetur. Praesent gravida odio sit amet quam faucibus
              fringilla. Etiam auctor fringilla pellentesque. Vivamus ultricies
              fermentum nibh, ac venenatis enim vehicula eu. Vestibulum egestas
              nibh id orci dapibus placerat. Maecenas non venenatis diam, eget
              ultricies mi. Aenean molestie diam ac rhoncus porttitor. Donec in
              orci id arcu efficitur convallis. Integer ac pulvinar justo.
              Vivamus a posuere augue. Praesent ultricies purus ac ante eleifend
              tristique. Suspendisse ullamcorper quis odio ultrices rutrum.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla vitae nunc non ipsum luctus
              porta eget eu justo. Integer sit amet blandit ipsum. Nulla mollis
              egestas lectus ac vehicula. Vestibulum placerat elit vitae diam
              pellentesque dignissim. Phasellus non auctor risus, eu gravida
              augue. Praesent vel vehicula diam. Maecenas enim odio, consequat
              non gravida eu, consectetur quis diam. Maecenas rhoncus tincidunt
              imperdiet. Sed consequat metus in sem volutpat sodales. Maecenas
              tempor egestas nisl in aliquam. Pellentesque egestas lacus a ante
              gravida suscipit ut eu erat. Etiam ligula purus, rhoncus quis
              pellentesque et, varius nec elit. Suspendisse molestie non lorem
              non hendrerit. Phasellus sed maximus ante. Donec ut pharetra
              nulla, eu volutpat felis. Mauris at dignissim enim. Phasellus
              laoreet tristique consectetur. Nullam at efficitur mi. Nam ante
              sem, auctor nec quam rhoncus, laoreet placerat tellus. Mauris nec
              velit id erat laoreet tincidunt. Curabitur nibh est, feugiat
              tincidunt purus in, gravida eleifend magna. Aliquam mollis felis
              at nisi dignissim tristique. Nunc vehicula pellentesque nisi, sed
              luctus sapien pellentesque lacinia.
            </IntroP>
          </ContentContainer>
        </Intro>
        <Fissure src={FissureGraphic} />
      </HomeContainer>
    );
  }
}
