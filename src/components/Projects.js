import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .innerContainer {
    width: 95%;
    max-width: 1024px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .title {
    font-size: 24px;

    color: #3483b2;
  }
  .tag {
    color: #767777;
  }
  .cards {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
`;

const Projects = () => {
  const imgArray = [
    "/images/hyeyum/1.png",
    "/images/hyeyum/2.png",
    "/images/hyeyum/3.png",
  ];
  const hyeyumArray = [
    "/images/hyeyum/2.png",
    "/images/hyeyum/1.png",
    "/images/hyeyum/3.png",
    "/images/hyeyum/4.png",
    "/images/hyeyum/5.png",
    "/images/hyeyum/6.png",
    "/images/hyeyum/7.png",
    "/images/hyeyum/8.png",
    "/images/hyeyum/9.png",
  ];
  const landrinkArray = [
    "/images/landrink/1.png",
    "/images/landrink/2.png",
    "/images/landrink/3.png",
    "/images/landrink/4.png",
  ];
  const myshyArray = [
    "/images/myshy/1.png",
    "/images/myshy/2.png",
    "/images/myshy/3.png",
    "/images/myshy/4.png",
  ];
  const emmaArray = [
    "/images/EMMA/1.png",
    "/images/EMMA/2.png",
    "/images/EMMA/3.png",
    "/images/EMMA/4.png",
    "/images/EMMA/5.png",
    "/images/EMMA/6.png",
    "/images/EMMA/7.png",
    "/images/EMMA/8.png",
    "/images/EMMA/9.png",
    "/images/EMMA/10.png",
    "/images/EMMA/11.png",
    "/images/EMMA/12.png",
    "/images/EMMA/13.png",
  ];
  const sifferArray = [
    "/images/siffer/1.png",
    "/images/siffer/2.png",
    "/images/siffer/3.png",
    "/images/siffer/4.png",
    "/images/siffer/5.png",
  ];
  return (
    <Container>
      <div className="innerContainer">
        <span>
          <span className="tag">{"< "}</span>
          <span className="title">Projects</span>
          <span className="tag">{" >"}</span>
        </span>
        <div className="cards">
          <ProjectCard title="과외 혜윰" imgArray={hyeyumArray} />
          <ProjectCard title="랜선주점" imgArray={landrinkArray} />
          <ProjectCard title="MyShy" imgArray={myshyArray} />
          <ProjectCard title="EMMA" imgArray={emmaArray} />
          <ProjectCard title="SIFFER" imgArray={sifferArray} />
          <ProjectCard title="포트폴리오 페이지" imgArray={imgArray} />
        </div>
        <span>
          <span className="tag">{"</ "}</span>
          <span className="title">Projects</span>
          <span className="tag">{" >"}</span>
        </span>
      </div>
    </Container>
  );
};

export default Projects;
