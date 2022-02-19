import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import Header from "./Header";
const Container = styled.div`
  width: 100%;
  background-image: url("/images/coding.jpg");
  background-position: center center;
  height: 600px;
  background-size: cover;
  .blur {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 12px;
  }
  .name {
    color: whitesmoke;
    font-family: "KOHIBaeumOTF";
    font-size: 44px;
  }
  .intro {
    color: whitesmoke;
    font-family: "KOHIBaeumOTF";
    font-size: 22px;
  }
  .duction {
    margin-top: 20px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  }
  .duction > p {
    font-size: 18px;
  }
`;
const Banner = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <div className="blur">
        <span className="name">
          {"< "}김민수{" />"}
        </span>
        <span className="intro">웹 / 앱 개발자 포트폴리오</span>
        {width > 768 ? (
          <div className="duction">
            <p>안녕하세요,</p>
            <p>코딩을 사랑하는 개발자 김민수입니다.</p>
            <p>문과적 소양과 이과적 능력을 겸비한 '융합형 인재' 입니다.</p>
          </div>
        ) : (
          <div className="duction">
            <p>안녕하세요,</p>
            <p>코딩을 사랑하는 개발자 김민수입니다.</p>
            <p>문과적 소양과 이과적 능력을 겸비한</p>{" "}
            <p>'융합형 인재' 입니다.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Banner;
