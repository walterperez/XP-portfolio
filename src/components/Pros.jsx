import React from "react";
import styled from "styled-components";
//COMPONENTS
import Pro from "./Pro";
//ICONS
import student from "./../media/svg/icons/student.svg";
import art from "./../media/svg/icons/art.svg";
import consulting from "./../media/svg/icons/consulting.svg";
import diploma from "./../media/svg/icons/diploma.svg";

const MainProsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 3em 3em;
`;

const Title = styled.h3`
  font-size: 2em;
  text-align: center;
  margin-bottom: 1em;
  color: rgba(0, 0, 0, 0.8);
`;

const ProsBox = styled.div`
  width: 100%;
  height: auto;
`;

const UnderLiner = styled.span`
  font-size: 1em;
  border-bottom: 0.1em solid orange;
`;

export default function Pros() {
  return (
    <MainProsContainer>
      <Title>
        Wh<UnderLiner>y choose </UnderLiner>me?
      </Title>
      <ProsBox>
        <Pro
          title={"Good learner"}
          icon={student}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
        <Pro
          title={"Talent for Arts"}
          icon={art}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
        <Pro
          title={"Just Graduated!"}
          icon={diploma}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
        <Pro
          title={"Excellent client atention"}
          icon={consulting}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
      </ProsBox>
    </MainProsContainer>
  );
}
