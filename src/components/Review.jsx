import React from "react";
import styled from "styled-components";

const MainProjectContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  padding: 1em 1em;
  background-color: white;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  width: 100px;
  height: 100px;
  height: auto;
  margin-bottom: 1em;
  border-radius: 50%;
  margin-right: 1em;
`;

const Name = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

const Description = styled.p`
  line-height: 1.2em;
  padding: 1em 2em;
  font-size: 1.2em;
`;

export default function Review({ name, photo, description }) {
  return (
    <MainProjectContainer>
      <MainImg src={photo} alt="" />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </MainProjectContainer>
  );
}
