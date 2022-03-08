import React from "react";
import styled from "styled-components";
import ArchivingCard from "./ArchivingCard";
import Tags from "./Tags";
import Tistory from "../assets/tistory-logo-fill.svg";
import { BsGithub } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .innerContainer {
    padding: 20px;
    width: 95%;
    max-width: 1024px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    box-sizing: border-box;
    column-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    .cards {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
  }
`;

const Archiving = () => {
  return (
    <Container>
      <div className="innerContainer">
        <Tags tagName={"Archiving"}>
          <div className="cards">
            <ArchivingCard
              title={"Github"}
              img={<BsGithub size="6em" />}
              link="https://github.com/on-stu"
            >
              <ul>
                <li>코딩 공부한 것들</li>
                <li>유튜브 튜토리얼 연습</li>
                <li>개인 토이 프로젝트</li>
                <li>팀 프로젝트</li>
              </ul>
            </ArchivingCard>
            <ArchivingCard
              title={"Tstory"}
              img={<img src={Tistory} width="100px" />}
              link="https://developer-ssu.tistory.com/"
            >
              <ul>
                <li>프로그래밍 언어 설명</li>
                <li>유용한 라이브러리 설명</li>
                <li>직면했던 오류 해결</li>
                <li>기타 취미 글</li>
              </ul>
            </ArchivingCard>
          </div>
        </Tags>
      </div>
    </Container>
  );
};

export default Archiving;
