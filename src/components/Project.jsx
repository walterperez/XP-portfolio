import React from "react";
import styled from "styled-components";

const MainProjectContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all linear 0.2s;
  background-color: #f7f7f7;
  margin-bottom: 3em;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 5px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

const MainProjectImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1em;
`;

const Description = styled.p`
  line-height: 1.2em;
  padding: 1em 2em;
  font-size: 1.2em;
`;

export default function Project({ title, icon, description }) {
  return (
    <MainProjectContainer>
      <MainProjectImg src={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </MainProjectContainer>
  );
}
