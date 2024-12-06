import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar({ setIsHovering }) {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);

      if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    const debouncedScroll = () => {
      clearTimeout(window.navbarScrollTimeout);
      window.navbarScrollTimeout = setTimeout(handleScroll, 1);
    };

    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(window.navbarScrollTimeout);
    };
  }, []);

  return (
    <motion.div className="w-full fixed top-0 flex justify-center z-[9999] font-poppins font-extralight">
      <motion.nav
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: { y: "-85%" },
          visible: { y: "0%" },
        }}
        transition={{ duration: 0.2 }}
        whileHover={{ y: "0%" }}
        className={`rectangle w-full sm:w-[700px] ${
          isHidden ? " bg-[#4c4c4c] hover:bg-[#010302]" : "bg-[#010302]"
        } transition-colors ${
          isHidden ? "duration-500" : "duration-0"
        } text-white sm:text-base  text-sm  py-3 px-4 sm:px-12 sm:space-x-16 space-x-8 xsss:space-x-4 xsss:text-[14px] flex justify-around sm:rounded-lg`}
      >
        <motion.a
          whileHover={{
            scale: 1.1,
            color: "#fff",
            textShadow: "0px 0px 20px #fff",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          href="#home"
          className="text-[#d1c3ae]"
          style={{ textShadow: "0px 0px 20px #d2af76" }}
          onMouseMove={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            color: "#fff",
            textShadow: "0px 0px 20px #fff",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          href="#about-me"
          className="text-[#d1c3ae]"
          style={{ textShadow: "0px 0px 20px #d2af76" }}
          onMouseMove={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          About Me
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            color: "#fff",
            textShadow: "0px 0px 20px #fff",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          href="#my-work"
          className="text-[#d1c3ae]"
          style={{ textShadow: "0px 0px 20px #d2af76" }}
          onMouseMove={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          My Work
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            color: "#fff",
            textShadow: "0px 0px 20px #fff",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          href="#contact-me"
          className="text-[#d1c3ae]"
          style={{ textShadow: "0px 0px 20px #d2af76" }}
          onMouseMove={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Contact Me
        </motion.a>
      </motion.nav>
    </motion.div>
  );
}

export default Navbar;
