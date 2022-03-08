import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const SidebarCon = styled.div`
  position: fixed;
  background-color: ${(props) =>
    props.visible ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  z-index: 100;
  top: 0;
  left: 0;
  width: fit-content;
  height: 100%;

  .navContainer {
    position: fixed;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    padding: 40px;
    box-sizing: border-box;
    transition: 600ms ease-in-out;
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .navContainer.active {
    left: 0;
  }
  .menus {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-size: 24px;
  }
  .closeButton {
    cursor: pointer;
  }
`;

const SideBar = ({ visible, setVisible }) => {
  return (
    <>
      <SidebarCon visible={visible}>
        <div className={visible ? "navContainer active" : "navContainer"}>
          <div className="top">
            <AiOutlineClose
              onClick={() => setVisible(false)}
              className="closeButton"
              color="#3483B2"
              size={40}
            />
          </div>
          <span className="menus">
            <span>
              <Link
                onClick={() => {
                  setVisible(false);
                }}
                to="About"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </span>
            <span>
              <Link
                onClick={() => {
                  setVisible(false);
                }}
                spy={true}
                smooth={true}
                to="Skills"
              >
                Skills
              </Link>
            </span>
            <span>
              <Link
                onClick={() => {
                  setVisible(false);
                }}
                spy={true}
                smooth={true}
                to="Archiving"
              >
                Archiving
              </Link>
            </span>
            <span>
              <Link
                onClick={() => {
                  setVisible(false);
                }}
                spy={true}
                smooth={true}
                to="Projects"
              >
                Projects
              </Link>
            </span>
            <span>
              <Link
                onClick={() => {
                  setVisible(false);
                }}
                spy={true}
                smooth={true}
                to="Careers"
              >
                Careers
              </Link>
            </span>
          </span>
        </div>
      </SidebarCon>
    </>
  );
};

export default SideBar;
