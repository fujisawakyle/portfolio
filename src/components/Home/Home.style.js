import styled from 'styled-components';

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
  top: 10%;
  left: 20%;
  font-family: 'Pompiere', cursive;
  font-weight: 100;
  font-size: 2.6em;
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
  top: 25px;
  right: 23px;
  z-index: 1;
  animation: spin 80s infinite linear;

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
  height: calc(7em + 27vh);
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
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
  width: calc(3em + 35vw);
  max-width: 23em;
  position: absolute;
  animation: sail-right 3s forwards linear, wave 2s infinite ease;

  @keyframes sail-right {
    0% {
      left: -60%;
    }
    100% {
      left: 60%;
    }
  }

  @keyframes wave {
    0% {
      top: calc(3em + 27vh);
    }
    50% {
      top: calc(3em + 30vh);
    }
    100% {
      top: calc(3em + 27vh);
    }
  }
`;

export const IntroSlideIn = styled.div`
  position: absolute;
  left: 100%;
  top: 65vh;
  text-align: center;
  width: 90%;
  max-width: 40em;
  animation: slide-in 0.5s 3.2s forwards ease;

  @keyframes slide-in {
    0% {
      left: 100%;
    }
    80% {
      left: -3%;
    }
    100% {
      left: 5%;
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

export const Bubble0 = styled.img`
  width: 0.7em;
  position: absolute;
  animation: rise0 4s infinite ease-in;

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
      top: calc(11em + 27vh);
      left: 16%;
    }
  }
`;

export const Bubble1 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise1 3s infinite ease-in;
  @keyframes rise1 {
    0% {
      top: 94%;
      left: 22%;
    }
    75% {
      left: 18%;
    }
    100% {
      top: calc(11em + 27vh);
      left: 19%;
    }
  }
`;
export const Bubble2 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise2 5s infinite ease-in;
  @keyframes rise2 {
    0% {
      top: 95%;
      left: 29%;
    }
    50% {
      left: 35%;
    }

    100% {
      top: calc(11em + 27vh);
      left: 55%;
    }
  }
`;
export const Bubble3 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise3 4s infinite ease-in;
  @keyframes rise3 {
    0% {
      top: 95%;
      left: 40%;
    }
    75% {
      left: 43%;
    }
    100% {
      top: calc(11em + 27vh);
      left: 41%;
    }
  }
`;
export const Bubble4 = styled.img`
  width: 0.7em;
  position: absolute;

  animation: rise4 8s infinite ease-in;
  @keyframes rise4 {
    0% {
      top: 95%;
      left: 65%;
    }

    75% {
    }
    100% {
      top: calc(11em + 27vh);
      left: 48%;
    }
  }
`;

export const Bubble5 = styled.img`
  width: 1em;
  position: absolute;

  animation: rise5 5s infinite ease-in;
  @keyframes rise5 {
    0% {
      top: 94%;
      left: 98%;
    }
    65% {
      left: 82%;
    }
    100% {
      top: calc(11em + 27vh);
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
