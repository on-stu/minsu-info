import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 15px;
  color: white;
  z-index: 100;
  .innerContainer {
    width: 95%;
    max-width: 1024px;
    padding: 20px;
    color: whitesmoke;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-size: 24px;
  }
  .menus {
    display: flex;
    column-gap: 10px;
  }
  .menus > span {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <div className="innerContainer">
        <span className="title">KMS's Portfolio</span>
        <span className="menus">
          <span>
            <a href="#About">About</a>
          </span>
          <span>
            <a href="#Skills">Skills</a>
          </span>
          <span>
            <a href="#Archiving">Archiving</a>
          </span>
          <span>
            <a href="#Projects">Projects</a>
          </span>
          <span>
            <a href="#Careers">Careers</a>
          </span>
        </span>
      </div>
    </Container>
  );
};

export default Header;
