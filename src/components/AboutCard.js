import React from "react";
import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const Container = styled.div`
  color: #ddb974;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  column-gap: 20px;
  .icon {
    font-size: 30px;
  }
  .right {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 14px;
  }
`;
const AboutCard = ({ icon }) => {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      {icon === "user" ? (
        <>
          <AiOutlineUser className="icon" />
          <div className="right">
            <span className="name">이름</span>
            <span>김민수</span>
          </div>
        </>
      ) : icon === "calendar" ? (
        <>
          <AiOutlineCalendar className="icon" />
          <div className="right">
            <span className="name">생년월일</span>
            <span>00.05.23</span>
          </div>
        </>
      ) : icon === "map" ? (
        <>
          <BiMap className="icon" />
          <div className="right">
            <span className="name">거주지</span>
            <span>부산광역시 금정구</span>
          </div>
        </>
      ) : icon === "phone" ? (
        <>
          <AiOutlinePhone className="icon" />
          <div className="right">
            <span className="name">연락처</span>
            <span>010-9990-7337</span>
          </div>
        </>
      ) : icon === "email" ? (
        <>
          <HiOutlineMail className="icon" />
          <div className="right">
            <span className="name">이메일</span>
            <span>
              minsu0523
              {width < 768 && <br />}
              @naver.com
            </span>
          </div>
        </>
      ) : (
        <>
          <MdOutlineSchool className="icon" />
          <div className="right">
            <span className="name">학력</span>
            <span>부산대학교 영어교육과 전공</span>
            <span>정보컴퓨터공학부 부전공</span>
          </div>
        </>
      )}
    </Container>
  );
};

export default AboutCard;
