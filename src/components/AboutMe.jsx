import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tab2 from "../assets/images/tab2.jpg";
import Professional from "./Professional";
import Personal from "./Personal";
import arrow from "../assets/images/Arrowglowy.png";


function AboutMe({ setIsHovering, isHovering }) {
  const [activeSection, setActiveSection] = useState("professional");
  const refScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["start start", "end start"],
  });
  const tab1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="min-h-[120vh] xl:h-[100vh] bg-black w-full flex flex-col justify-center items-center relative overflow-hidden text-white"
      ref={refScroll}
    >
      <div
        className="absolute inset-0 flex justify-center"
        style={{
          backgroundImage: `linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url('${tab2}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: tab1Y,
        }}
      >
        <motion.h1
          className="sm:text-[42px]  text-[22px] absolute sm:top-10 top-5  text-center font-medium  text-[#d1c3ae]  font-jose   z-30"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          About Me
        </motion.h1>
        <span className=" sm:mt-20 mt-9">
          <img
            src={`${arrow}`}
            alt="Arrow"
            className="sm:w-[150px] w-[75px] sm:h-20 h-[50px] drop-shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              filter: isHovering ? "brightness(1.2)" : "brightness(0.8)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", 
              transition: "filter 0.3s ease", 
            }}
          />
        </span>
      </div>
      <div className="z-[30] flex flex-col h-screen w-full sm:mt-32 mt-20 space-y-10 font-poppins">
        <div className="flex justify-around gap-4">
          <button
            className={` sm:text-[18px] text-[15px]  flex flex-col  items-center gap-2 font-medium   ${
              activeSection === "professional"
                ? " text-[#d1c3ae]"
                : "text-[#ffffff] "
            }`}
            style={{
              textShadow: "0px 0px 20px #d2af76",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setActiveSection("professional")}
          >
            Core Expertise
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: activeSection === "professional" ? "30px" : 0,
                opacity: activeSection === "professional" ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 0.3,
              }}
              className={` ${
                activeSection === "professional" &&
                "rounded-full w-[30px] h-[5px] bg-[#d1c3ae]  "
              } `}
            ></motion.span>
          </button>

          <button
            className={`sm:text-[18px] text-[15px]  flex flex-col  items-center gap-2 font-medium   ${
              activeSection === "personal"
                ? " text-[#d1c3ae]"
                : "text-[#ffffff]"
            }`}
            style={{
              textShadow: "0px 0px 20px #d2af76",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setActiveSection("personal")}
          >
            Human Connections
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: activeSection === "personal" ? "30px" : 0,
                opacity: activeSection === "personal" ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 0.3,
              }}
              className={` ${
                activeSection === "personal" &&
                "rounded-full w-[30px] h-[5px] bg-[#d1c3ae]  "
              } `}
            ></motion.span>
          </button>
        </div>

        <div className="">
          {activeSection === "professional" ? (
            <Professional
              isHovering={isHovering}
              setIsHovering={setIsHovering}
            />
          ) : (
            <Personal isHovering={isHovering} setIsHovering={setIsHovering} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
