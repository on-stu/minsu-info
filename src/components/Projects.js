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
    "/images/hyeyum/1.png",
    "/images/hyeyum/2.png",
    "/images/hyeyum/3.png",
    "/images/hyeyum/4.png",
    "/images/hyeyum/5.png",
    "/images/hyeyum/6.png",
    "/images/hyeyum/7.png",
    "/images/hyeyum/8.png",
    "/images/hyeyum/9.png",
  ];
  return (
    <Container>
      <div className="innerContainer" id="Projects">
        <span>
          <span className="tag">{"< "}</span>
          <span className="title">Projects</span>
          <span className="tag">{" >"}</span>
        </span>
        <div className="cards">
          <ProjectCard title="과외 혜윰" imgArray={hyeyumArray} />
          <ProjectCard title="랜선주점" imgArray={imgArray} />
          <ProjectCard title="MyShy" imgArray={imgArray} />
          <ProjectCard title="EMMA" imgArray={imgArray} />
          <ProjectCard title="SIFFER" imgArray={imgArray} />
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
