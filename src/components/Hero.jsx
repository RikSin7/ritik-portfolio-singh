import { useEffect, useRef, useState } from "react";
import banner_0 from "../assets/images/banner_0.png";
import banner_1 from "../assets/images/banner_1.png";
import banner_2 from "../assets/images/banner_2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import resume from "../assets/images/Resume-ritik-singh-frontend-react.pdf";
import rikBuilding from "../assets/images/rikBuilding.jpg";
import hireMe from "../assets/images/hireMe.webp";

function Hero({ setIsHovering }) {
  const refScroll = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMidScreen, setIsMidScreen] = useState(false);
  const [downloadPosition, setDownloadPosition] = useState({ x: 0, y: 0 });
  const [hirePosition, setHirePosition] = useState({ x: 0, y: 0 });
  const [isHoveringDownload, setIsHoveringDownload] = useState(false);
  const [isHoveringHire, setIsHoveringHire] = useState(false);
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const handleMouseMoveAccounts = (e, index) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left - bounds.width / 2) * 0.5;
    const y = (e.clientY - bounds.top - bounds.height / 2) * 0.5;

    setPositions((prev) =>
      prev.map((pos, i) => (i === index ? { x, y } : pos))
    );
  };

  const handleMouseLeaveAccounts = (index) => {
    setPositions((prev) =>
      prev.map((pos, i) => (i === index ? { x: 0, y: 0 } : pos))
    );
  };

  const handleMouseMove = (e, setPosition) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left - bounds.width / 2) * 0.1;
    const y = (e.clientY - bounds.top - bounds.height / 2) * 0.1;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 668);
      setIsMidScreen(window.innerWidth < 668);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["start start", "end start"],
  });
  const banner0Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const banner1Y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const banner2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const text1Y = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
  const text2Y = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const text3Y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const text4Y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  return (
    <div
      className="h-[100vh] bg-black w-full flex justify-center items-center relative overflow-hidden text-white"
      ref={refScroll}
    >
      <motion.span
        style={{
          y: text3Y,
        }}
        className="absolute sm:top-[12%] top-[25%]  z-40"
      >
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          src={`${rikBuilding}`}
          alt="rikDp"
          className="sm:w-36 sm:h-36 w-28 h-28 rounded-full object-cover brightness-75 shadow-2xl shadow-[#000000] "
        />
      </motion.span>
      <motion.h2
        className={`md:text-[42px] sm:text-[25px] text-[22px] md:top-[32%] sm:top-[40%] top-[43%] font-medium  text-[#d1c3ae]  font-jose absolute  -translate-y-1/2 z-[37]`}
        style={{
          y: isMidScreen ? text2Y : text1Y,
          textShadow: "0px 0px 20px #d2af76",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Hi there! it&apos;s me,
      </motion.h2>
      <motion.h1
        className={`md:text-[128px] sm:text-[96px] text-[60px] font-medium md:top-[40%] sm:top-[44%] top-[48%] text-[#d1c3ae]  font-jose absolute  -translate-y-1/2 z-[30]`}
        style={{
          y: isSmallScreen ? text4Y : text3Y,
          textShadow: "0px 0px 20px #d2af76",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Ritik Singh
      </motion.h1>
      <motion.div
        className=" absolute inset-0 z-10"
        style={{
          backgroundImage: `url('${banner_0}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: banner0Y,
        }}
      ></motion.div>

      <motion.div
        className=" absolute inset-0 z-20  "
        style={{
          backgroundImage: `url('${banner_1}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: banner1Y,
        }}
      ></motion.div>

      <motion.div
        className=" absolute inset-0 z-[35]"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 70%, #010302 100%), url(${banner_2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: banner2Y,
        }}
      ></motion.div>
      <motion.div
        className="font-poppins z-40 w-full flex justify-center mt-96 sm:space-x-8 space-x-4"
        style={{
          y: text2Y,
          userSelect: "none",
        }}
      >
        <div
          className="relative flex justify-center"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <motion.div
            className="bg-white/5 px-6 py-3 rounded-3xl cursor-pointer flex justify-center items-center sm:border-2 border border-[#000000] outline-none"
            onMouseMove={(e) => handleMouseMove(e, setDownloadPosition)}
            onMouseLeave={() => handleMouseLeave(setDownloadPosition)}
            onHoverStart={() => setIsHoveringDownload(true)}
            onHoverEnd={() => setIsHoveringDownload(false)}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.3 } }}
          >
            <motion.a
              href={resume}
              download="Resume-ritik-singh-frontend-react.pdf"
              animate={{
                x: downloadPosition.x,
                y: downloadPosition.y,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>
          <motion.span
            className="absolute top-11 text-xl text-[#ffffff]"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isHoveringDownload ? 1 : 0,
              y: isHoveringDownload ? 0 : 50,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <i className="ri-file-download-fill"></i>
          </motion.span>
        </div>

        <div
          className="relative flex justify-center"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <motion.div
            className="relative z-50 px-6 py-3 text-white font-poppins rounded-3xl sm:border-2 border border-[#575757]  bg-[#000000] overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, setHirePosition)}
            onMouseLeave={() => handleMouseLeave(setHirePosition)}
            onHoverStart={() => setIsHoveringHire(true)}
            onHoverEnd={() => setIsHoveringHire(false)}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.3 } }}
          >
            <motion.a
              href="#contact-me"
              className="relative z-10"
              animate={{
                x: hirePosition.x,
                y: hirePosition.y,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              Hire Me
            </motion.a>
            <div className="wave-effect absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#434343] to-[#101010] animate-wave"></div>
          </motion.div>
          <motion.span
            className="absolute top-[52px] z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isHoveringHire ? 1 : 0,
              y: isHoveringHire ? 0 : 50,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <img
              src={`${hireMe}`}
              className="w-4 h-4 bg-transparent"
              alt="hire-me"
            />
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        className="z-40 mr-10 absolute sm:right-10 right-3 top-24 sm:top-[35%] text-[#d1c3ae] text-[30px] sm:text-[35px] flex gap-2 lg:text-[40px] flex-wrap cursor-pointer w-0"
        style={{
          y: text3Y,
        }}
      >
        {[
          {
            iconClass: "ri-linkedin-fill",
            url: "https://www.linkedin.com/in/ritik-singhh",
          },
          { iconClass: "ri-github-fill", url: "https://github.com/RikSin7" },
          {
            iconClass: "ri-instagram-line",
            url: "https://www.instagram.com/rikxsin",
          },
          {
            iconClass: "ri-mail-line",
            url: "mailto:singhritik2675@gmail.com",
          },
        ].map((icon, index) => (
          <motion.a
            whileHover={{ scale: 0.8, transition: { duration: 0.3 } }}
            whileTap={{ scale: 1, transition: { duration: 0.3 } }}
            key={index}
            href={icon.url} // Set the link for each icon
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security best practice for external links
            className="cursor-pointer"
            animate={{
              x: positions[index].x, // Use updated position
              y: positions[index].y, // Use updated position
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
          >
            <motion.i
              key={index}
              className={icon.iconClass}
              style={{
                textShadow: "0px 0px 20px #d2af76",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={(e) => handleMouseMoveAccounts(e, index)}
              onMouseOut={() => handleMouseLeaveAccounts(index)}
            ></motion.i>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;
