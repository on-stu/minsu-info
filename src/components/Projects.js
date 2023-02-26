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
  const campusdateArray = [
    "/images/campusdate/1.png",
    "/images/campusdate/2.png",
    "/images/campusdate/3.png",
    "/images/campusdate/4.png",
    "/images/campusdate/5.png",
  ];
  const jjockgoArray = [
    "/images/jjockgo/1.png",
    "/images/jjockgo/3.png",
    "/images/jjockgo/2.png",
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
          <ProjectCard
            title="랜선주점"
            imgArray={landrinkArray}
            detail={`랜선 주점은 socket.io, webRTC를 통한 비대면 술자리 웹앱입니다. 프론트엔드는 react를 사용해서 구성했으며, 백엔드는 express를 사용했습니다. 당시 코로나 상황으로 술집이나 음식점이 업무 시간에 제한을 받았기 때문에 술자리가 많이 줄어들었던 것을 문제로 생각하여, 가끔 줌(zoom)을 통해 친구들과 술을 마시던 기억을 토대로 랜선 주점을 기획, 개발해보았습니다. 카카오 소셜 로그인 기능도 탑재시켰으며, 카카오로 친구 초대하기 기능까지 만들었습니다. 이를 통해 소셜 로그인 기능이 어떤 식으로 작동하는지 확실히 공부가 되었으며, socket.io와 webRTC의 작동 방식에 대한 이해도 더 깊어질 수 있었습니다.`}
          />
          <ProjectCard
            title="MyShy"
            imgArray={myshyArray}
            detail={`저의 가장 친한 친구인 shy(별명)는 노래를 정말 잘 합니다. 저는 어찌보면 이 친구의 팬으로 볼 수도 있겠습니다. 웹 개발을 공부하던 중, 제 하드 디스크에 이 친구가 부른 노래 영상이 200개 이상 저장돼 있는 게 불현듯 떠올랐고, express와 mongodb를 통해 crud를 만드는 것(Mern stack)을 연습하고 있던 저는 이 친구의 노래를 들을 수 있는 사이트를 개발하면 재미있겠다고 생각이 들었습니다. 그래서 개발하게 되어, Mern stack에 대한 이해가 상당히 높아졌으며, 더 익숙하게 사용할 수 있게 되었습니다. 개인적으로는 나름 재미있는 프로젝트였다고 생각합니다.`}
          />
          <ProjectCard
            title="EMMA"
            imgArray={emmaArray}
            detail={`EMMA는 who am I라는 슬로건을 바탕으로 시작한 앱 서비스입니다. 부산대학교 Apptive 동아리 (어플 제작 동아리)에서 진행한 프로젝트였으며, 개발자로 참여했습니다. Linked-In과 같이 취업 준비생을 위한 앱이었으며, 좀 더 편하게 직관적인 포트폴리오를 쉽게 만들 수 있도록 해주는 어플을 개발하고자 했습니다. React Native와 Express, Mongodb를 사용해 개발을 진행하였으며, 이전까지는 개인프로젝트만 진행했었으나, EMMA를 만들어보며 협업을 어떤 방식으로 진행해야 하는지에 대해 더 이해할 수 있었습니다.`}
          />
          <ProjectCard
            title="SIFFER"
            imgArray={sifferArray}
            detail={`SIFFER는 Size + offer로 사이즈 솔루션 서비스입니다. 사이즈 검색엔진 이라는 기능이 메인 기능이며, backend는 Django로 구성하였습니다. 웹 크롤링 기술을 활용해서 사고 싶은 옷의 url을 검색하면 해당 페이지를 분석하여, 자신의 신체 치수에 가장 적합한 사이즈 및 다른 추천 상품들을 제공하는 것을 목적으로 합니다. tensorflow를 통해 신체 치수 최적화 및 쇼핑몰 상품의 물성 예측 AI를 개발하였습니다. Next.js로 SSR을 구현했으며, 이후 React Native를 통해 어플리케이션도 개발할 예정입니다.`}
          />
          <ProjectCard
            title="포트폴리오 페이지"
            imgArray={imgArray}
            arrow="white"
            detail={`포트폴리오 페이지는 현재 보시고 계신 이 페이지를 말합니다. 지금까지 했던, 하고 있는 프로젝트들을 정리해서 포트폴리오로 만들어야 겠다는 생각을 하여 React를 이용해 개발을 하였으며 따로 백엔드는 구현하지 않았습니다.`}
          />
          <ProjectCard
            title="캠퍼스 데이트"
            imgArray={campusdateArray}
            detail={`캠퍼스 데이트는 같은 대학 내 사람들과 소개팅을 할 수 있게 해주는 데이팅 앱입니다. React Native, Django, socket.io를 사용하여, 취미, 이상형, 성향을 비롯한 자동 매칭 알고리즘, 실시간 채팅 기능, 기타 게시판 기능들을 만들었습니다. 실제 사용되는 서비스 구현을 목적으로 했기 때문에 지금까지 만들던 프로젝트들 중 가장 많은 기능과 내용을 담고 있었고, 그렇기 때문에 앱이 제대로 시행되기 위해서는 기존에 만들었던 프로젝트들 보다 훨씬 더 높은 이해가 필요했고, 코드가 제대로 작성될 필요가 있었습니다. 그러한 과정속에서 React의 useState, useEffect, useMemo, useContext 등의 hook을 통한 lifecycle 관리의 제대로 된 이해를 할 수 있었고, 나아가, fcm, expo push-notification을 통해 푸쉬 알림 기능 구현에 성공했습니다.`}
          />
          <ProjectCard
            title="쪽고의 모험"
            imgArray={jjockgoArray}
            detail={`쪽고의 모험이라는 게임은 Flutter와 Flame으로 만들어진 게임으로, Flappy Bird와 유사한 형식입니다. 게임은 부산대학교 쪽문 앞에 사는 고양이인 쪽고를 캐릭터로 사용하여 제작되었습니다. 쪽고의 모험은 누구나 쉽게 접근할 수 있는 형태로 제작되어, Android용으로는 플레이스토어에서 다운로드하여 즐길 수 있고, iOS용으로는 PWA 형식으로 웹에서 플레이할 수 있습니다. (앱스토어에서는 거부당했습니다.)`}
            links={[
              {
                link: "https://play.google.com/store/apps/details?id=info.minsu.jjockgo",
                title: "Play Store",
              },
              {
                link: "https://jjockgo.minsu.info/",
                title: "Web (PWA)",
              },
            ]}
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
