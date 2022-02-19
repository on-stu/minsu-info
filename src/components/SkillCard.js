import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  background-color: whitesmoke;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
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
    height: 100%;
    row-gap: 20px;
  }
  .rightTop {
    display: flex;
    justify-content: space-between;
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
  }
`;
const SkillCard = ({ image, title, percent, category }) => {
  return (
    <Container image={image} percent={percent}>
      <div className="img"></div>
      <div className="right">
        <div className="rightTop">
          <span className="name">{title}</span>
          <span className="category">{category}</span>
        </div>
        <div className="progress">
          <div className="bar"></div>
        </div>
        <div className="exp">Exp : {percent} / 100</div>
      </div>
    </Container>
  );
};

export default SkillCard;
