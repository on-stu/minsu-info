import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 15px;
  padding-bottom: 15px;
  color: white;
  z-index: 100;
  ${(props) => props.headerBackground && "background-color: #131314;"}
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
  .menu {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const Header = ({ headerBackground }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Container headerBackground={headerBackground}>
      <div className="innerContainer">
        <span className="title">KMS's Portfolio</span>
        {width > 768 ? (
          <span className="menus">
            <span>
              <Link to="About" spy={true} smooth={true}>
                About
              </Link>
            </span>
            <span>
              <Link spy={true} smooth={true} to="Skills">
                Skills
              </Link>
            </span>
            <span>
              <Link spy={true} smooth={true} to="Archiving">
                Archiving
              </Link>
            </span>
            <span>
              <Link spy={true} smooth={true} to="Projects">
                Projects
              </Link>
            </span>
            <span>
              <Link spy={true} smooth={true} to="Careers">
                Careers
              </Link>
            </span>
          </span>
        ) : (
          <span className="menu">
            <AiOutlineMenu />
          </span>
        )}
      </div>
    </Container>
  );
};

export default Header;
