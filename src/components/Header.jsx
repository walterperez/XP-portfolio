import React, { Component } from "react";
import styled from "styled-components";
//IMAGES
import mainLogo from "./../media/svg/walterLogo.svg";

const HeaderMainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 4rem;
  background-color: #090909;
  padding: 0.5em 1.5em;
`;

const Logo = styled.img`
  height: 100%;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderMainContainer>
        <Logo src={mainLogo} />
      </HeaderMainContainer>
    );
  }
}
