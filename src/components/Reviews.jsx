import React from "react";
import styled from "styled-components";
//COMPONENTS
import Review from "./Review";
//photoS
import WillSmithPhoto from "./../media/img/will.jpg";
import JimCarreyPhoto from "./../media/img/jim.jpg";

const MainProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: orange;
  background-image: linear-gradient(
    -35deg,
    rgba(250, 250, 250, 0.2),
    rgba(0, 0, 0, 0.3)
  );
  padding: 3em 2em 3em 2em;
`;

const Title = styled.h3`
  font-size: 2em;
  text-align: center;
  margin-bottom: 2em;
  color: white;
`;

const ProjectsBox = styled.div`
  width: 100%;
  height: auto;
`;
const UnderLiner = styled.span`
  font-size: 1em;
  border-bottom: 0.1em solid orange;
`;

export default function Projects() {
  return (
    <MainProjectsContainer>
      <Title>
        R<UnderLiner>eview</UnderLiner>s
      </Title>
      <ProjectsBox>
        <Review
          name={"Will Smith"}
          photo={WillSmithPhoto}
          description={"Great Developer, BETTER person."}
        />
        <Review
          name={"Jim Carrey"}
          photo={JimCarreyPhoto}
          description={
            "Life opens up opportunities to you, and you either take them or you stay afraid of taking them."
          }
        />
      </ProjectsBox>
    </MainProjectsContainer>
  );
}
