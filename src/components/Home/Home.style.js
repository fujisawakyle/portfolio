import styled from 'styled-components';
import media from '../../theme/media';

export const HomeContainer = styled.div`
  color: white;
  position: relative;
  background: #1983fb;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 40em;
  border-radius: 0.4em;
`;

export const HeroText = styled.h1`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 100;
  font-size: 7em;
  font-family: 'Chewy', cursive;
`;

export const WelcomeText = styled.h1`
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 17%;
  font-family: 'Pompiere', cursive;
  font-weight: 100;
  font-size: calc(1.8em + 2.5vw);
  text-shadow: 1.2px 0px #000;
`;

export const Name = styled.span`
  font-family: 'Barrio', cursive;
  color: #0557b7;
`;

export const Sun = styled.img`
  width: 4em;
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 1;
  animation: spin 80s infinite linear;
`;

export const Rays = styled.img`
  position: absolute;
  top: 3%;
  right: 5%;
  width: calc(7em + 5vw);
  z-index: 1;
  animation: spin 20s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Wave = styled.div`
  background: linear-gradient(to bottom, #22c5ff, #48f4e5);
  height: 40vh;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat;
    height: 1em;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #1983fb 13px
    );
  }
`;

export const Nav = styled.div`
  position: sticky;
  height: 5em;
  top: 0;
  left: 0;
  width: 20%;
  z-index: 1;
  li {
    list-style: none;
  }
  display: none;
  ${media.sm`
    display:block;
  `};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Projects = styled.div`
  img {
    transition: all 1.5s ease-in-out;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  ${media.sm`
  flex-direction: row;
  flex-wrap: wrap;
`};
`;

export const SkillsTitle = styled.h1`
  border-bottom: 2px solid #44f544;
  margin-left: 0.5em;
  padding-bottom: 0.5em;
  text-align: left;
  display: table;
`;

export const Hero = styled.div`
  color: white;
  position: relative;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #1983fb 82%,
    #5092dc 109%,
    #ffffff 341%
  );
  background: #1983fb;
`;

export const Boat = styled.img`
  z-index: 1;
  width: calc(2em + 39vw - 10vw);
  max-width: 16em;
  position: absolute;
  animation: sail-right 2s forwards linear, wave 2s infinite ease;

  @keyframes sail-right {
    0% {
      left: 0%;
    }
    100% {
      left: 40vw;
    }
  }

  @keyframes wave {
    0% {
      top: calc(37vh - 10vw);
    }
    50% {
      top: calc(39vh - 10vw);
    }
    100% {
      top: calc(37vh - 10vw);
    }
  }
`;

export const IntroSlideIn = styled.div`
  position: absolute;
  left: 100%;
  top: calc(2em + 42vh + 4.8vw);
  font-size: calc(0.3em + 1.8vh + 1.4vw);
  text-align: center;
  width: 90%;
  max-width: 40em;
  text-shadow: 0.7px 1.6px #000;
  z-index: 1;
  animation: slide-in 0.5s 2s forwards ease;

  @keyframes slide-in {
    0% {
      left: 100%;
    }
    80% {
      left: 40%;
    }
    100% {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

// export const Boat2 = styled.img`
//   width: calc(9.1em + 1.2vw);
//   position: absolute;
//   transform: rotateY(-180deg);
//   animation: sail-left 15s infinite linear, wave 2s infinite ease;
// `;

export const DownArrow = styled.img`
  width: calc(1.1em + 1.2vw);
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  animation: arrowdown 0.7s infinite ease;

  @keyframes arrowdown {
    from {
      bottom: 6vh;
    }
    to {
      bottom: 4vh;
    }
  }
`;

export const Intro = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const IntroP = styled.p``;

export const SkillsBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5em;
  width: 95%;
  padding: 20px;
  ${media.lg`
    width: 47%;
  `};
`;

export const SkillsItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  > * {
    width: 30%;
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const SkillsItem = styled.div`
  width: 30%;
  background: rgba(96, 218, 251, 0.45);
  margin: 0.2em;
`;

export const SkillsBoxIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SkillsRectangle = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bubble0 = styled.img`
  width: 0.7em;
  position: absolute;
  animation: rise0 5s infinite ease-in;

  @keyframes rise0 {
    0% {
      top: 95%;
      left: 15%;
    }
    25% {
      left: 18%;
    }
    70% {
      left: 17%;
    }
    100% {
      top: 38vh;
      left: 16%;
    }
  }
`;

export const Bubble1 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise1 4s infinite ease-in;
  @keyframes rise1 {
    0% {
      top: 94%;
      left: 22%;
    }
    75% {
      left: 18%;
    }
    100% {
      top: 38vh;
      left: 19%;
    }
  }
`;
export const Bubble2 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise2 6s infinite ease-in;
  @keyframes rise2 {
    0% {
      top: 95%;
      left: 29%;
    }
    50% {
      left: 35%;
    }

    100% {
      top: 38vh;
      left: 55%;
    }
  }
`;
export const Bubble3 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise3 5s infinite ease-in;
  @keyframes rise3 {
    0% {
      top: 95%;
      left: 40%;
    }
    75% {
      left: 43%;
    }
    100% {
      top: 38vh;
      left: 41%;
    }
  }
`;
export const Bubble4 = styled.img`
  width: 0.7em;
  position: absolute;

  animation: rise4 9s infinite ease-in;
  @keyframes rise4 {
    0% {
      top: 95%;
      left: 65%;
    }

    75% {
    }
    100% {
      top: 38vh;
      left: 48%;
    }
  }
`;

export const Bubble5 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise5 6s infinite ease-in;
  @keyframes rise5 {
    0% {
      top: 94%;
      left: 98%;
    }
    65% {
      left: 82%;
    }
    100% {
      top: 38vh;
      left: 80%;
    }
  }
`;

export const Fissure = styled.img`
  position: absolute:
  bottom: 0;
  width:100%;
`;

export const Footer = styled.div`
  height: 5em;
  background: #97693f;
`;
