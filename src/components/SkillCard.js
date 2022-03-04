import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/UseWindowDimensions";
const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  background-color: whitesmoke;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 200ms linear;
  &:hover {
    transform: scale(1.02);
  }
  .img {
    width: 100px;
    height: 100px;
    background-image: ${(props) => props.image && `url(${props.image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .right {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    row-gap: 20px;
  }
  .rightTop {
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
  }
  .category {
    color: gray;
  }
  .name {
    font-size: 20px;
    color: #1e1e1e;
  }
  .progress {
    width: 100%;
    height: 12px;
    border-radius: 10px;
    background-color: #1e1e1e;
    display: flex;
    align-items: center;
    padding: 4px;
    box-sizing: border-box;
  }
  .bar {
    width: ${(props) => (props.percent ? `${props.percent}%` : "20%")};
    height: 5px;
    border-radius: 10px;
    background-color: ${(props) =>
      props.percent > 60
        ? `#00C072`
        : props.percent < 50
        ? "#D083C4"
        : "#86d9fc"};
  }
  .exp {
    display: flex;
    justify-content: flex-end;
    color: gray;
  }
  @media screen and (max-width: 768px) {
    .img {
      width: 50px;
      height: 50px;
    }
    .right {
      row-gap: 10px;
    }
    .name {
      font-size: 16px;
    }
    .imgContainer {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`;
const SkillCard = ({ image, title, percent, category }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Container image={image} percent={percent}>
      {width > 768 && <div className="img"></div>}
      <div className="right">
        <div className="rightTop">
          <span className="name">{title}</span>
        </div>
        {width < 768 && (
          <div className="imgContainer">
            <div className="img"></div>
          </div>
        )}
        {/* <div className="progress">
          <div className="bar"></div>
        </div> */}
        <div className="exp">
          <span className="category">{category}</span>
        </div>
      </div>
    </Container>
  );
};

export default SkillCard;
