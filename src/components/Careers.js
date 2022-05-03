import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .innerContainer {
    width: 95%;
    max-width: 1024px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 24px;

    color: #3483b2;
  }
  .tag {
    color: #767777;
  }
  .listContainer {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  .list {
    display: flex;
    justify-content: space-between;
    width: 100%;

    font-size: 20px;
  }
  .date {
    color: #f29766;
  }
  .content {
    color: #ddb974;
  }
  @media screen and (max-width: 768px) {
    .list {
      flex-direction: column;
      row-gap: 8px;
    }
    .content {
      word-break: keep-all;
    }
  }
`;

const EachCarrer = ({ date, content }) => {
  return (
    <div className="list">
      <span className="date">{date}</span>
      <span className="content">{content}</span>
    </div>
  );
};

const Careers = () => {
  return (
    <Container>
      <div className="innerContainer">
        <span>
          <span className="tag">{"< "}</span>
          <span className="title">Careers</span>
          <span className="tag">{" >"}</span>
        </span>
        <div className="listContainer">
          <EachCarrer
            date="2021.09 ~ 현재"
            content="부산대학교 정보컴퓨터공학부 부전공"
          />
          <EachCarrer
            date="2021.11 ~ 2022.01"
            content="부산대학교 어플 동아리 'Apptive' 2팀 프로젝트 EMMA 참여"
          />
          <EachCarrer
            date="2021.12 ~ 현재"
            content="사이즈 맞춤 서비스 스타트업 'SIFFER' 개발자로 참여"
          />
          <EachCarrer date="2022.04 ~ 2022.06" content="노마드 장학생 선발" />
        </div>
        <span>
          <span className="tag">{"</ "}</span>
          <span className="title">Careers</span>
          <span className="tag">{" >"}</span>
        </span>
      </div>
    </Container>
  );
};

export default Careers;
