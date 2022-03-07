import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: rebeccapurple;
  position: relative;
  .leftButton {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding-left: 10px;
  }
  .rightButton {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    padding-right: 10px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;

const Carousel = () => {
  return (
    <Container>
      <span className="leftButton">
        <AiOutlineLeft />
      </span>
      <div className="innerContainer">Carousel</div>
      <span className="rightButton">
        <AiOutlineRight />
      </span>
    </Container>
  );
};

export default Carousel;
