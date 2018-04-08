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

export const SideBar = styled.div`
  position: sticky;
  height: 5em;
  top: 0;
  left: 0;
  width: 10%;
  z-index: 1;
  li {
    list-style: none;
  }
  display: none;
  ${media.lg`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  `};
`;

export const Nav = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center
  align-items:center;
  text-align:center;
  margin: 0 auto;
  border-right: 2px solid #44f544;
  padding-right: 15px;
  margin-top: 30px;
  a:hover {
    cursor: pointer;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-bottom: 10px;
  img:hover {
    opacity: 1;
  }
`;

export const ContactIcon = styled.img`
  width: 60%;
  margin: 10px auto;
  opacity: 0.8;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${media.sm`
  flex-direction: row;
  flex-wrap: wrap;
`};
  ${media.lg`
  margin-bottom: 2em;
  `};
`;

export const SectionTitle = styled.h1`
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
  max-width: 1200px;

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
  max-width: 1200px;
  margin: 0 auto;
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
  justify-content: space-around;

  > * {
    width: 30%;
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const SkillsItem = styled.div`
  width: 200px;
  background: rgba(96, 218, 251, 0.45);
  margin: 0.2em;
`;

export const SkillsBoxIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkillsRectangle = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.div`
  display: block;
  ${media.lg`
    display:none;
  `};
`;

export const ContactIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
  img {
    width: 4em;
  }
  img:hover {
    padding: 2px;
  }
`;

export const Sand = styled.img`
  width: 100%;
  margin-bottom: -10px;
`;

export const Crab = styled.img`
  position: absolute;
  top: -30px;
  left: 20%;
  width: calc(3em + 8vw);

  animation: crawl 20s infinite linear, tobble 0.5s infinite linear;
  @keyframes crawl {
    0% {
      left: 20%;
      top: -30px;
    }
    10% {
      left: 20%;
      top: -30px;
    }
    35% {
      left: 65%;
    }
    50% {
      left: 50%;
      top: -10px;
    }

    60% {
      left: 82%;
      top: -20px;
    }
    90% {
      top: 15px;
    }
    100% {
      left: 20%;
      top: -30px;
    }
  }
  @keyframes tobble {
    0% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
`;

export const Footer = styled.div`
  height: 5em;
  background: #97693f;
`;
