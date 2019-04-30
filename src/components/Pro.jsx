import React from "react";
import styled from "styled-components";

const MainProContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 3em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all linear 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px 2px rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: rgb(255, 182, 0);
`;

const MainIconImg = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 1em;
`;

const Description = styled.p`
  padding: 1em 2em;
`;

export default function Pros({ title, icon, description }) {
  return (
    <MainProContainer>
      <MainIconImg src={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </MainProContainer>
  );
}
