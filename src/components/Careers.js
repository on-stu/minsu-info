import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
`;

const Careers = () => {
  return (
    <Container>
      <div className="innerContainer" id="Careers">
        <span>
          <span className="tag">{"< "}</span>
          <span className="title">Careers</span>
          <span className="tag">{" >"}</span>
        </span>
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
