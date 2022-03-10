import { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./components/About";
import Archiving from "./components/Archiving";
import Banner from "./components/Banner";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import Skills from "./components/Skills";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  .anchor {
    display: block;
    position: relative;
    top: -80px;
    visibility: hidden;
  }
`;

function App() {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [sideBar, setSideBar] = useState(false);
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
      <a id="top"></a>
      <Header
        headerBackground={headerBackground}
        setSideBar={setSideBar}
        sideBar={sideBar}
      />
      <SideBar visible={sideBar} setVisible={setSideBar} />
      <Banner />
      <a className="anchor" id="About"></a>
      <About />
      <a className="anchor" id="Skills"></a>
      <Skills />
      <a className="anchor" id="Archiving"></a>
      <Archiving />
      <a className="anchor" id="Projects"></a>
      <Projects />
      <a className="anchor" id="Careers"></a>
      <Careers />

      <Footer />
    </Container>
  );
}

export default App;
