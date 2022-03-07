import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 200px;
  background-color: rgba(153, 153, 153, 0.2);
  border-radius: 10px;
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
    z-index: 10;
    cursor: pointer;
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
    z-index: 10;
    cursor: pointer;
  }
  .innerContainer {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px !important;
    height: 200px;
    overflow: hidden;
    padding: 0 !important;
    margin: 0;
  }
  .imgContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${(props) => `${props.imgLength * 300}px`};
    height: 200px;
    transition: 300ms ease-in-out;
    ${(props) =>
      `transform: translateX(-${(props.current / props.imgLength) * 100}%);`}
  }
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 225px;
    .leftButton .rightButton {
      cursor: none;
    }
    .innerContainer {
      width: ${(props) => `${props.imgLength * 225}px`};
      width: 225px !important;
      height: 150px;
    }
    .imgContainer {
      height: 150px;
    }
  }
`;

const Img = styled.div`
  width: 300px;
  min-width: 300px;
  height: 200px;
  ${(props) => props.img && `background-image: url(${props.img});`}
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    width: 225px;
    min-width: 225px;
    height: 150px;
  }
`;

const Carousel = ({ imgArray }) => {
  const [current, setCurrent] = useState(0);
  return (
    <Container current={current} imgLength={imgArray.length}>
      <span
        className="leftButton"
        onClick={() => {
          if (current === 0) {
            setCurrent(imgArray.length - 1);
          } else {
            setCurrent(current - 1);
          }
        }}
      >
        <AiOutlineLeft />
      </span>
      <div className="innerContainer">
        <div className="imgContainer">
          {imgArray.map((img, i) => (
            <Img img={img} key={i} />
          ))}
        </div>
      </div>
      <span
        className="rightButton"
        onClick={() => {
          if (current === imgArray.length - 1) {
            setCurrent(0);
          } else {
            setCurrent(current + 1);
          }
        }}
      >
        <AiOutlineRight />
      </span>
    </Container>
  );
};

export default Carousel;
