import React from "react";
import styled from "styled-components";
//IMAGES
import heroImage from "./../media/img/computer.jpg";
import waveBackground from "./../media/svg/waveBackground.png";

const HeroContentMain = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 7rem 3em;
  background: linear-gradient(
      to bottom right,
      rgba(0, 47, 75, 0.5),
      rgba(220, 66, 37, 0.8)
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`;

const MainTitleContainer = styled.div`
  color: white;
`;
const Title = styled.div`
  font-size: 4em;
  margin-bottom: 0.5em;
`;
const Subtitle = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
  color: rgba(250, 250, 150, 0.8);
`;
const UnderLiner = styled.span`
  font-size: 1em;
  border-bottom: 0.1em solid currentColor;
`;
const MainButton = styled.button`
  font-size: 1.5em;
  padding: 1em 2em;
  background: #ffa500;
  color: black;
  font-weight: 1000;
  border: 0;
  &:hover {
    background: #e09102;
    cursor: pointer;
  }
`;

export default function HeroContent() {
  return (
    <HeroContentMain>
      <MainTitleContainer>
        <Title>
          Hi! I'm <UnderLiner>Walter!</UnderLiner>
        </Title>
        <Subtitle>
          I <UnderLiner>do</UnderLiner> websites!
        </Subtitle>
      </MainTitleContainer>
      <MainButton>Start now!</MainButton>
    </HeroContentMain>
  );
}
