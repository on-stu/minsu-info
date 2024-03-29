import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import { AiFillCheckCircle } from "react-icons/ai";
import Carousel from "./Carousel";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  background-color: whitesmoke;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  .projectTitle {
    color: black;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .icon {
    color: #abcba2;
  }
  .contents {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    padding: 20px;
    box-sizing: border-box;
    column-gap: 20px;
  }
  .details {
    font-family: "MinSans-Light";
    font-weight: 300;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  a {
    color: #3483b2;
    margin-right: 8px;
  }
  .emphasis {
    color: #e44c27;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    .contents {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      row-gap: 20px;
      padding: 10px;
    }
  }
`;
const ProjectCard = ({ title, imgArray, arrow, detail, links }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <div className="top">
        <span className="projectTitle">
          <AiFillCheckCircle className="icon" />
          {title}
        </span>
      </div>
      <div className="contents">
        <Carousel
          imgArray={imgArray}
          white={arrow === "white" ? true : false}
        />
        <div className="details">
          {detail
            ? detail
            : `처음으로 해본 프로젝트로 사범대이며 교육에 간심 개 조지 처음으로 해본
          프로젝트로 사범대이며 교육에 간심 개 조지 처음으로 해본 프로젝트로
          사범대이며 교육에 간심 개 조지 처음으로 해본 프로젝트로 사범대이며
          교육에 간심 개 조지 처음으로 해본 프로젝트로 사범대이며 교육에 간심 개
          조지 처음으로 해본 프로젝트로 사범대이며 교육에 간심 개 조지 처음으로
          해본 프로젝트로 사범대이며 교육에 간심 개 조지 처음으로 해본
          프로젝트로 사범대이며 교육에 간심 개 조지 ㅍ`}
          {links && links.length > 0 && (
            <>
              <span className="emphasis">링크 : </span>
            </>
          )}
          {links &&
            links.length > 0 &&
            links.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.title}
                </a>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default ProjectCard;
