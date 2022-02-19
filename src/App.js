import styled from "styled-components";
import About from "./components/About";
import Archiving from "./components/Archiving";
import Banner from "./components/Banner";
import Careers from "./components/Careers";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
`;

function App() {
  return (
    <Container>
      <Banner />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Careers />
    </Container>
  );
}

export default App;
