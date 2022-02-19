import React from "react";
import styled from "styled-components";
import AboutCard from "./AboutCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  .innerContainer {
    padding: 50px;
    width: 95%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 24px;
    color: #3483b2;
  }
  .tag {
    color: #767777;
  }
  .info {
    padding: 32px;
  }
  .information {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    .information {
      display: flex;
      flex-direction: column;
    }
  }
`;

const About = () => {
  return (
    <Container>
      <div className="innerContainer" id="About">
        <span>
          <span className="tag">{"< "}</span>
          <span className="title">About</span>
          <span className="tag">{" >"}</span>
        </span>
        <div className="info">
          <div className="information">
            <AboutCard icon="user" />
            <AboutCard icon="calendar" />
            <AboutCard icon="map" />
            <AboutCard icon="phone" />
            <AboutCard icon="email" />
            <AboutCard icon="pen" />
          </div>
        </div>
        <span>
          <span className="tag">{"</ "}</span>
          <span className="title">About</span>
          <span className="tag">{" >"}</span>
        </span>
      </div>
    </Container>
  );
};

export default About;
