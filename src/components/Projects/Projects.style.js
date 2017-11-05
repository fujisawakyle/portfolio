import styled, { css } from 'styled-components';

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
  min-height: 300px;
  overflow: hidden;
  display: flex;
`;
export const Panel = styled.div`
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 1s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
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
  ${({ hide }) => hide && css`flex: 10;`};
`;

export const Project1 = styled.div`
  background: url('../../assets/images/projects/WeatherApp.png');
  background-position: center;
  background-repeat: no-repeat;
  &:after {
    content: ' ';
  }
`;
