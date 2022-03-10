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
  const imgArray = ["/images/portfolio/1.png", "/images/portfolio/2.png"];
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
    "/images/myshy/3.png",
    "/images/myshy/1.png",
    "/images/myshy/2.png",
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
          <ProjectCard
            title="과외 혜윰"
            imgArray={hyeyumArray}
            detail={`과외 알바를 여러 개 하다보니 생긴 불편함들과 코로나 시국이 합쳐져서 혜윰이라는 프로젝트를 기획해보게 되었습니다. 사실, 당시에는 개발 실력을 키우는 게 가장 큰 목적이었고, 프로젝트를 해보는 게 처음이었기 때문에 기획이 제대로 되지도 않았기에 결국, 개발 내지 코딩만 열심히 한 경험이 되었습니다. 
            기본적으로 혜윰은 비대면 과외 플랫폼이며 과외 학생과 선생님을 이어주는 매칭 서비스, 과외 선생님들이 만든 문제 및 학습자료 컨텐츠 거래 서비스, 과외 학생 관리 서비스(과제 및 커리큘럼 등)를 제공하고자 시작했으나 기획에서의 한계를 절실히 느끼고 아쉽지만 처음으로 큰 프로젝트를 생각해내고 개발해봤다는 데에 의의를 두기로 했습니다.`}
          />
          <ProjectCard title="랜선주점" imgArray={landrinkArray} />
          <ProjectCard title="MyShy" imgArray={myshyArray} />
          <ProjectCard title="EMMA" imgArray={emmaArray} />
          <ProjectCard title="SIFFER" imgArray={sifferArray} />
          <ProjectCard
            title="포트폴리오 페이지"
            imgArray={imgArray}
            arrow="white"
          />
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
