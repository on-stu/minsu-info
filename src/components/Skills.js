import React from "react";
import styled from "styled-components";
import Tags from "./Tags";
import SkillCard from "./SkillCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .innerContainer {
    width: 95%;
    padding: 20px;
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
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
  .lower > span > .title {
    color: #88deff;
  }
  @media screen and (max-width: 768px) {
    .lower {
      display: flex;
      flex-direction: column;
    }
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
        <div className="lower">
          <SkillCard
            image={"/images/react.png"}
            title="React"
            percent={90}
            category="Frontend"
          />
          <SkillCard
            image={"/images/javascript.png"}
            title="Javascript"
            percent={100}
            category="Frontend"
          />
          <SkillCard
            image={"/images/redux.png"}
            title="Redux"
            percent={100}
            category="Frontend"
          />
          <SkillCard
            image={"/images/react.png"}
            title="React-Native"
            percent={85}
            category="Moblie App"
          />
          <SkillCard
            image={"/images/flutter.png"}
            title="Flutter / Dart"
            percent={70}
            category="Moblie App"
          />
          <SkillCard
            image={"/images/python.png"}
            title="Python"
            percent={80}
            category="Language"
          />
          <SkillCard
            image={"/images/typescript.png"}
            title="Typescript"
            percent={50}
            category="Language"
          />
          <SkillCard
            image={"/images/nodejs.png"}
            title="Node.js"
            percent={90}
            category="Backend"
          />
          <SkillCard
            image={"/images/django.png"}
            title="Django"
            percent={50}
            category="Backend"
          />

          <SkillCard
            image={"/images/firebase.png"}
            title="Firebase"
            percent={80}
            category="Backend"
          />
          <SkillCard
            image={"/images/heroku.png"}
            title="Heroku"
            percent={95}
            category="Deployment"
          />
          <SkillCard
            image={"/images/aws.png"}
            title="AWS"
            percent={55}
            category="Deployment"
          />

          <SkillCard
            image={"/images/netlify.png"}
            title="Netlify"
            percent={95}
            category="Deployment"
          />
          <SkillCard
            image={"/images/mongodb.png"}
            title="MongoDB"
            percent={80}
            category="Database"
          />
          <SkillCard
            image={"/images/sqlite.png"}
            title="SQLite3"
            percent={75}
            category="Database"
          />
          <SkillCard
            image={"/images/socketio.png"}
            title="Socket.io"
            percent={60}
            category="Library"
          />
          <SkillCard
            image={"/images/webrtc.png"}
            title="WebRTC"
            percent={40}
            category="API"
          />
        </div>
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
