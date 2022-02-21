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
      <div className="innerContainer" id="Archiving">
        <Tags tagName={"Archiving"}>
          <div className="cards">
            <ArchivingCard
              title={"Github"}
              img={<BsGithub size="6em" />}
              link="https://github.com/on-stu"
            >
              <ul>
                <li>어쩌고</li>
                <li>어쩌고</li>
                <li>어쩌고</li>
                <li>어쩌고</li>
                <li>어쩌고</li>
              </ul>
            </ArchivingCard>
            <ArchivingCard
              title={"Tstory"}
              img={<img src={Tistory} width="100px" />}
              link="https://developer-ssu.tistory.com/"
            >
              <ul>
                <li>어쩌고</li>
                <li>어쩌고</li>
                <li>어쩌고</li>
                <li>어쩌고</li>
                <li>어쩌고</li>
              </ul>
            </ArchivingCard>
          </div>
        </Tags>
      </div>
    </Container>
  );
};

export default Archiving;
