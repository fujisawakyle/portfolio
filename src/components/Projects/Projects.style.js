import styled, { css } from 'styled-components';
import media from '../../theme/media';

import WeatherAppImg from '../../assets/images/projects/WeatherApp.png';
import ResumeAppImg from '../../assets/images/projects/ResumeApp.png';
import CalculatorAppImg from '../../assets/images/projects/CalculatorApp.png';
import MediflectionAppImg from '../../assets/images/projects/MediflectionApp.png';
import GreenCloud from '../../assets/graphics/GreenCloud.svg';
import OrangeCloud from '../../assets/graphics/OrangeCloud.svg';
import PurpleCloud from '../../assets/graphics/PurpleCloud.svg';
import RedCloud from '../../assets/graphics/RedCloud.svg';

export const ProjectContainer = styled.div``;

export const ProjectImage = styled.img`
  width: 40%;
  max-width: 40em;
`;

export const RevealLeft = styled.p`
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 10s cubic-bezier(0.1, 2.7, 0.58, 1);
  }
  ${({ hide }) =>
    hide &&
    css`
      &:after {
        transform: rotateY(0deg);
      }
    `};
  ${({ show }) =>
    show &&
    css`
      &:after {
        transform: rotateY(90deg);
      }
    `};
`;

export const Panels = styled.div`
  min-height: 450px;
  overflow: hidden;
  display: flex;
`;
export const Panel = styled.div`
  background: #fff;
  z-index: 1;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  > * {
    margin: 0;
    width: 100%;
    transition: transform 1s;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${({ show }) => show && css`flex: 10;`};
  ${({ hide }) => hide && css`flex: 0;`};
`;

export const WeatherApp = styled.div`
  background: url(${WeatherAppImg});
  background-size: auto 17em;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    content: url(${OrangeCloud});
    z-index: -1;
    position: absolute;
    top: 0;
    left: 49%;
    transform: translateX(-50%);
  }
`;

export const ResumeApp = styled.div`
  background: url(${ResumeAppImg});
  background-size: auto 17em;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    content: url(${PurpleCloud});
    z-index: -1;
    position: absolute;
    top: 0;
    left: 51%;
    transform: translateX(-50%);
  }
  }
`;

export const CalculatorApp = styled.div`
  background: url(${CalculatorAppImg});
  background-size: auto 17em;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    content: url(${GreenCloud});
    z-index: -1;
    position: absolute;
    top: 0;
    left: 51%;
    transform: translateX(-50%);
  }
`;

export const MediflectionApp = styled.div`
  background: url(${MediflectionAppImg});
  background-size: auto 7.3em;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  transition: background-size 0.2s ease-in;

  &:hover {
    background-size: auto 7.5em;
  }

  &:after {
    background-image: url(${RedCloud});
    background-size: 14.5em 20.5em;
    background-repeat: no-repeat;
    content: ' ';
    z-index: -1;
    position: absolute;
    display: inline-block;
    width: 14.5em;
    height: 20.5em;
    top: 0;
    left: 49%;
    transform: translateX(-50%);
  }
  ${media.xs`
  background-size: auto 9.5em;
  &:hover {
    background-size: auto 9.7em;
  }
  &:after {
    background-size: 20.3em 20.5em;
    width: 20.3em;
    height: 20.5em;
  }
  `} ${media.sm`
    background-size: auto 13.5em;
    &:hover {
      background-size: auto 13.7em;
    }
    &:after {
      background-size: 26.8em 20.5em;
      width: 26.8em;
      height: 20.5em;
    }
    
  `} ${media.md`
    background-size: auto 17em;
    &:hover {
      background-size: auto 17.2em;
    }
    &:after {
      background-size: 36.8em 20.5em;
      width: 36.8em;
      height: 20.5em;
    }
  `};
`;
