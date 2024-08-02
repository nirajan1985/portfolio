import React from "react";

import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Certificate from "./components/Certificate/Certificate";
import Skill from "./components/skill/Skill";
import AlsoSkill from "./components/AlsoSkill/AlsoSkill";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Project />

      <Certificate />
      <Skill />
      <AlsoSkill />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
