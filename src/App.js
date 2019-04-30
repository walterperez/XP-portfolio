import React, { Component } from "react";
import styled from "styled-components";
//CSS
import "./App.css";
//COMPONENTS
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import Pros from "./components/Pros";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const MainContainerApp = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

class App extends Component {
  render() {
    return (
      <MainContainerApp>
        <Header />
        <HeroContent />
        <Pros />
        <Projects />
        <Reviews />
        <Footer />
      </MainContainerApp>
    );
  }
}

export default App;
