import React from "react";
import styled from "styled-components";
import ArchivingCard from "./ArchivingCard";
import Tags from "./Tags";

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
`;

const Archiving = () => {
  return (
    <Container>
      <div className="innerContainer" id="Archiving">
        <Tags tagName={"Archiving"}>
          <div className="cards">
            <ArchivingCard />
            <ArchivingCard />
          </div>
        </Tags>
      </div>
    </Container>
  );
};

export default Archiving;
