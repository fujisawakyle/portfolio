import styled from 'styled-components';

export const HeroImage = styled.img`
  width: 100%;
  max-width: 40em;
  border-radius: 0.4em;
`;

export const HeroText = styled.h1`
  position: absolute;
  top: 10%;
  left: 20%;
  z-index: 1;
  color: white;
`;

export const Name = styled.span`
  font-family: 'Barrio', cursive;
  color: #0557b7;
`;

export const Wave = styled.div`
  background: linear-gradient(to bottom, #22c5ff, #48f4e5);
  height: 65vh;
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

export const Header = styled.div`background: #1983fb;`;

export const Hero = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #1983fb 82%,
    #5092dc 109%,
    #ffffff 341%
  );
  //background: #1983fb;
`;

export const DownArrow = styled.img`
  width: calc(1.1em + 1.2vw);
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  animation: mymove 1s;
  animation-iteration-count: 10;

  @keyframes mymove {
    from {
      bottom: 2em;
    }
    to {
      bottom: 1em;
    }
  }
`;
