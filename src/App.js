import { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./components/About";
import Archiving from "./components/Archiving";
import Banner from "./components/Banner";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
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
  const [headerBackground, setHeaderBackground] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 100) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <Container>
      <Header headerBackground={headerBackground} />
      <Banner />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Careers />
      <Footer />
    </Container>
  );
}

export default App;
