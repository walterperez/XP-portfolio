import React from "react";
import styled from "styled-components";
//COMPONENTS
import Pro from "./Project";
//ICONS
import kodflixImg from "./../media/img/projects/kodflix.png";
import walterWebDesignsImg from "./../media/img/projects/wd1.png";
import walkerBarberShopImg from "./../media/img/projects/walkerbarbershop.png";
import walterrepoImg from "./../media/img/projects/walterrepo.png";
import cuttingGuruImg from "./../media/img/projects/cuttingguru.png";

const MainProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 3em 1em;
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
        P<UnderLiner>roject</UnderLiner>s
      </Title>
      <ProjectsBox>
        <Pro
          title={"Kodflix"}
          icon={kodflixImg}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Pro
          title={"Walter Web Designs"}
          icon={walterWebDesignsImg}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Pro
          title={"Walker Barbershop"}
          icon={walkerBarberShopImg}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Pro
          title={"Walterrepo"}
          icon={walterrepoImg}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Pro
          title={"Cutting Guru"}
          icon={cuttingGuruImg}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </ProjectsBox>
    </MainProjectsContainer>
  );
}
