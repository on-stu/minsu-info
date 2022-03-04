import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  background-color: whitesmoke;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  transition: all 200ms linear;
  cursor: pointer;
  .list {
    width: 50%;
    display: flex;
  }
  &:hover {
    transform: scale(1.02);
  }
  .link {
    color: #399dda;
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    .linkContainer {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .link {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .list {
      width: 80%;
    }
  }
`;
const ArchivingCard = ({ children, title, img, link }) => {
  return (
    <Container onClick={() => (window.location.href = link)}>
      {img}
      <span>{title}</span>
      <span className="link">{link}</span>
      <div className="list">{children}</div>
    </Container>
  );
};

export default ArchivingCard;
