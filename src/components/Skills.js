import React from "react";
import styled from "styled-components";
import Tags from "./Tags";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .innerContainer {
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
  .lower {
    padding: 14px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
  .lower > span > .title {
    color: #88deff;
  }
`;

const Skills = () => {
  return (
    <Container>
      <div className="innerContainer" id="Skills">
        <span>
          <span className="tag">{"< "}</span>
          <span className="title">Skills</span>
          <span className="tag">{" >"}</span>
        </span>
        <div className="lower"></div>
        <span>
          <span className="tag">{"</ "}</span>
          <span className="title">Skills</span>
          <span className="tag">{" >"}</span>
        </span>
      </div>
    </Container>
  );
};

export default Skills;
