import React from "react";
import styled from "styled-components";

const FooterMainDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 3em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Title = styled.h3`
  font-size: 1.2em;
  text-align: center;
  color: rgba(250, 250, 250, 0.8);
`;

export default function Footer() {
  return (
    <FooterMainDiv>
      <Title> &copy; Copyright 2019 WalterWebDev | All rights reserved.</Title>
    </FooterMainDiv>
  );
}
