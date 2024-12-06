import Hero from "./components/Hero";
import Main from "./components/Main";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { Toaster } from "react-hot-toast";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-black">
      <Toaster />
      <CustomCursor isHovering={isHovering} />

      <Navbar isHovering={isHovering} setIsHovering={setIsHovering} />

      <div className="scroll-smooth">
        <section id="home">
          <Hero setIsHovering={setIsHovering} isHovering={isHovering} />
        </section>
        <section id="about-me">
          <AboutMe setIsHovering={setIsHovering} isHovering={isHovering} />
        </section>
        <section id="my-work">
          <Main setIsHovering={setIsHovering} isHovering={isHovering} />
        </section>
        <section id="contact-me">
          <ContactMe setIsHovering={setIsHovering} isHovering={isHovering} />
        </section>
      </div>
    </div>
  );
}

export default App;
