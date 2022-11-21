import React from "react";
import styled from "styled-components";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
const Container = styled.div`
  height: 200px;
  width: 100%;
  margin-top: 100px;
  background-color: #131314;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icons {
    display: flex;
    justify-content: space-between;
    width: 70%;
    max-width: 300px;
    color: whitesmoke;
    font-size: 50px;
  }
  .icon {
    cursor: pointer;
  }
`;
const Footer = () => {
  return (
    <Container>
      <div className="icons">
        <AiFillGithub
          className="icon"
          onClick={() => (window.location.href = "https://github.com/on-stu")}
        />
        <AiOutlineInstagram
          className="icon"
          onClick={() =>
            (window.location.href = "https://www.instagram.com/mminnsssuu/")
          }
        />
        <AiOutlineFacebook
          className="icon"
          onClick={() =>
            (window.location.href =
              "https://www.facebook.com/profile.php?id=100027559523477")
          }
        />
      </div>
      <a href="https://pusan.zoom.us/j/92148569948?pwd=cHdQekw2Ui81Q0F6eXBVenVSODk4dz09">
        민우야 이거 눌러봐
      </a>
    </Container>
  );
};

export default Footer;
