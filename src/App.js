import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import MouseBalls from "./app/Components/Animations/MouseBalls";
import Navbar from "./app/Components/Utils/Navbar";
import Projects from "./app/projects/page";
import Experience from "./app/experience/page";
import About from "./app/about/page";
import Contact from "./app/contact/page";
import TransitionTemplate from "./TransitionTemplate";
import Hackathons from "./app/achievements/page";
import IndividualProject from "./app/individual-project/page";
import ScrollWrapper from "./app/ScrollWrapper";

const App = () => {
  return (
    <TransitionTemplate>
      <Navbar />
      <MouseBalls />
      <ScrollWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<IndividualProject />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollWrapper>
    </TransitionTemplate>
  );
};

export default App;
