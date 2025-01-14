import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import tab1 from "../assets/images/tab1.jpg";
import FoldableNotes from "./FoldableNotes";
import FoldableCurrConv from "./FoldableCurrConv";
import arrow from "../assets/images/Arrowglowy.png";
import FoldableNetflix from "./FoldableNetflix";
import FoldableBingeBank from "./FoldableBingeBank";

function Main({ isHovering, setIsHovering }) {
  const [isOpenNetflix, setIsOpenNetflix] = useState(false);
  const [isOpenNotes, setIsOpenNotes] = useState(false);
  const [isOpenCurrConv, setIsOpenCurrConv] = useState(false);
  const [isOpenBingeBank, setIsOpenBingeBank] = useState(false);
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]); // Individual positions for each icon

  const handleMouseMove = (e, index) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left - bounds.width / 2) * 0.2;
    const y = (e.clientY - bounds.top - bounds.height / 2) * 0.2;

    setPositions((prev) =>
      prev.map(
        (pos, i) => (i === index ? { x, y } : pos) // Update only the hovered icon's position
      )
    );
  };

  const handleMouseLeave = (index) => {
    setPositions((prev) =>
      prev.map(
        (pos, i) => (i === index ? { x: 0, y: 0 } : pos) // Reset only the hovered icon's position
      )
    );
  };
  const refScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["start start", "end start"],
  });
  const tab1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <motion.div
      className="min-h-[120vh] xl:h-[100vh] bg-black w-ful font-jose flex flex-col justify-center items-center relative overflow-hidden text-white "
      ref={refScroll}
      style={{
        userSelect: "none",
      }}
    >
      <motion.div
        className="absolute inset-0 "
        style={{
          backgroundImage: `linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url('${tab1}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: tab1Y,
        }}
      >
        <div className="sm:h-44 h-32 w-full flex flex-col justify-center items-center ">
          <motion.h1
            className="sm:text-[42px]  text-[22px] absolute sm:top-10 top-5  text-center font-medium  text-[#d1c3ae]  font-jose   z-40"
            style={{
              textShadow: "0px 0px 20px #d2af76",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Prodigy: My Projects
          </motion.h1>
          <span className=" sm:mt-20 mt-2">
            <img
              src={`${arrow}`}
              alt="Arrow"
              className="sm:w-[220px] w-[115px] sm:h-28 h-16 drop-shadow-2xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                filter: isHovering ? "brightness(1.2)" : "brightness(0.8)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", // Horizontal, vertical, blur, spread, color
                transition: "filter 0.3s ease", // Sm
              }}
            />
          </span>
        </div>
      </motion.div>

      <div className="md:grid  md:grid-cols-2 md:w-auto flex flex-col bg-black justify-end sm:gap-4 gap-4 smMinus:mt-24 sm:mt-32 mt-20 md:mt-16 lg:mt-32 xl:gap-28 mdPlus:gap-16 md:gap-8 lg:gap-10">
        <div className="flex w-full h-full justify-start  items-center flex-wrap relative">
          <AnimatePresence mode="wait">
            {!isOpenNetflix ? (
              <motion.span
                className={`absolute w-[140px] xsss:text-[12px] smMinus:w-[160px] smMinus:text-[16px]  text-wrap left-4  z-30 sm:text-[15px] sm:w-[180px] sm:-left-10 text-[14px] md:text-[13px] md:w-[150px] md:-left-7 mdPlus:text-[17px] mdPlus:w-[200px] mdPlus:-left-16 lg:-left-8 lg:text-[16px] lg:w-[180px] xl:w-[200px] xl:text-[18px] xl:-left-8 xsss:-left-1`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  style={{
                    textShadow: "0px 0px 20px #d2af76",
                  }}
                  className=" font-medium text-[#d1c3ae]"
                >
                  Netflix Clone: A Cinematic Experience Reimagined. ✨
                </h1>
                <p className="lg:mt-2 sm:mt-2 mt-2 font-normal">
                  Get ready to Netflix & chill, developer-style! 🍿🎬
                </p>
                <motion.span className="text-[#d1c3ae] text-[20px] sm:text-[25px] mt-2 smMinus:text-[24px] flex gap-2 lg:gap-4  md:text-[22px] xl:text-[25px]">
                  {[
                    "ri-html5-line",
                    "ri-css3-line",
                    "ri-tailwind-css-fill",
                    "ri-javascript-line",
                    "ri-reactjs-fill",
                  ].map((iconClass, index) => (
                    <motion.i
                      key={index}
                      className={iconClass}
                      style={{
                        textShadow: "0px 0px 20px #d2af76",
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseOut={() => handleMouseLeave(index)}
                      animate={{
                        x: positions[index].x,
                        y: positions[index].y,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                      }}
                    ></motion.i>
                  ))}
                </motion.span>
              </motion.span>
            ) : (
              <motion.a
                href="https://nettflixed.netlify.app/"
                target="_blank"
                className="text-[#d1c3ae] text-[20px] sm:-left-16 flex gap-1 justify-center items-center absolute z-30 cursor-pointer md:text-[15px] md:-left-10 mdPlus:text-[23px] mdPlus:-left-16 lg:text-[20px] lg:-left-12 xl:-left-20 xl:text-[28px] xsss:-left-4 xsss:text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                style={{
                  textShadow: "0px 0px 20px #d2af76",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Link
                <span>
                  <i className="ri-links-line"></i>
                </span>
              </motion.a>
            )}
          </AnimatePresence>

          <FoldableNetflix
            setIsHovering={setIsHovering}
            isOpenNetflix={isOpenNetflix}
            setIsOpenNetflix={setIsOpenNetflix}
          />
        </div>

        <div className="flex w-full h-full justify-start  items-center flex-wrap relative">
          <AnimatePresence mode="wait">
            {!isOpenNotes ? (
              <motion.span
                className={`absolute w-[140px] xsss:text-[12px] smMinus:w-[160px] smMinus:text-[16px]  text-wrap left-4  z-30 sm:text-[15px] sm:w-[180px] sm:-left-10 text-[14px] md:text-[13px] md:w-[150px] md:-left-7 mdPlus:text-[17px] mdPlus:w-[200px] mdPlus:-left-16 lg:-left-8 lg:text-[16px] lg:w-[180px] xl:w-[200px] xl:text-[18px] xl:-left-8 xsss:-left-1`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  style={{
                    textShadow: "0px 0px 20px #d2af76",
                  }}
                  className=" font-medium text-[#d1c3ae]"
                >
                  Notes: All-in-One Productivity Hub!💡
                </h1>
                <p className="mt-2 font-normal">
                  Stay organized with this intuitive notes-taking, to-do lists,
                  sticky-notes app!
                </p>
                <motion.span className="text-[#d1c3ae] text-[20px] sm:text-[25px] mt-2 smMinus:text-[24px] flex gap-2 lg:gap-4 md:text-[22px] xl:text-[25px]">
                  {[
                    "ri-html5-line",
                    "ri-css3-line",
                    "ri-tailwind-css-fill",
                    "ri-javascript-line",
                    "ri-reactjs-fill",
                  ].map((iconClass, index) => (
                    <motion.i
                      key={index}
                      className={iconClass}
                      style={{
                        textShadow: "0px 0px 20px #d2af76",
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseOut={() => handleMouseLeave(index)}
                      animate={{
                        x: positions[index].x,
                        y: positions[index].y,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                      }}
                    ></motion.i>
                  ))}
                </motion.span>
              </motion.span>
            ) : (
              <motion.a
                href="https://notepot.vercel.app"
                target="_blank"
                className="text-[#d1c3ae] text-[20px] sm:-left-16 flex gap-1 justify-center items-center absolute z-30 cursor-pointer md:text-[15px] md:-left-10 mdPlus:text-[23px] mdPlus:-left-16 lg:text-[20px] lg:-left-12 xl:-left-20 xl:text-[28px] xsss:-left-4 xsss:text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                style={{
                  textShadow: "0px 0px 20px #d2af76",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Link
                <span>
                  <i className="ri-links-line"></i>
                </span>
              </motion.a>
            )}
          </AnimatePresence>

          <FoldableNotes
            setIsHovering={setIsHovering}
            isOpenNotes={isOpenNotes}
            setIsOpenNotes={setIsOpenNotes}
          />
        </div>

        <div className="flex w-full h-full justify-start  items-center flex-wrap relative xl:-mt-12 ">
          <AnimatePresence mode="wait">
            {!isOpenCurrConv ? (
              <motion.span
                className={`absolute w-[140px] xsss:text-[12px] smMinus:w-[160px] smMinus:text-[16px]  text-wrap left-4  z-30 sm:text-[15px] sm:w-[180px] sm:-left-10 text-[14px] md:text-[13px] md:w-[150px] md:-left-7 mdPlus:text-[17px] mdPlus:w-[200px] mdPlus:-left-16 lg:-left-8 lg:text-[16px] lg:w-[180px] xl:w-[200px] xl:text-[18px] xl:-left-8 xsss:-left-1`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  style={{
                    textShadow: "0px 0px 20px #d2af76",
                  }}
                  className=" font-medium text-[#d1c3ae]"
                >
                  Currency Converter: Turn Your 💸 into Global Power. 🌍✨
                </h1>
                <p className="mt-2 font-normal">
                  Stay Ahead with Real-Time Currency Conversion.
                </p>
                <motion.span className="text-[#d1c3ae] text-[20px] sm:text-[25px] mt-2 smMinus:text-[24px] flex gap-2 lg:gap-4 md:text-[22px] xl:text-[25px]">
                  {[
                    "ri-html5-line",
                    "ri-css3-line",
                    "ri-tailwind-css-fill",
                    "ri-javascript-line",
                    "ri-reactjs-fill",
                  ].map((iconClass, index) => (
                    <motion.i
                      key={index}
                      className={iconClass}
                      style={{
                        textShadow: "0px 0px 20px #d2af76",
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseOut={() => handleMouseLeave(index)}
                      animate={{
                        x: positions[index].x,
                        y: positions[index].y,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                      }}
                    ></motion.i>
                  ))}
                </motion.span>
              </motion.span>
            ) : (
              <motion.a
                href="https://currencyfusion.netlify.app/"
                target="_blank"
                className="text-[#d1c3ae] text-[20px] sm:-left-16 flex gap-1 justify-center items-center absolute z-30 cursor-pointer md:text-[15px] md:-left-10 mdPlus:text-[23px] mdPlus:-left-16 lg:text-[20px] lg:-left-12 xl:-left-20 xl:text-[28px] xsss:-left-4 xsss:text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                style={{
                  textShadow: "0px 0px 20px #d2af76",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Link
                <span>
                  <i className="ri-links-line"></i>
                </span>
              </motion.a>
            )}
          </AnimatePresence>

          <FoldableCurrConv
            setIsHovering={setIsHovering}
            isOpenCurrConv={isOpenCurrConv}
            setIsOpenCurrConv={setIsOpenCurrConv}
          />
        </div>

        <div className="flex w-full h-full justify-start  items-center flex-wrap relative xl:-mt-12">
          <AnimatePresence mode="wait">
            {!isOpenBingeBank ? (
              <motion.span
                className={`absolute w-[140px] xsss:text-[12px] smMinus:w-[160px] smMinus:text-[16px]  text-wrap left-4  z-30 sm:text-[15px] sm:w-[180px] sm:-left-10 text-[14px] md:text-[13px] md:w-[150px] md:-left-7 mdPlus:text-[17px] mdPlus:w-[200px] mdPlus:-left-16 lg:-left-8 lg:text-[16px] lg:w-[180px] xl:w-[200px] xl:text-[18px] xl:-left-8 xsss:-left-1`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  style={{
                    textShadow: "0px 0px 20px #d2af76",
                  }}
                  className=" font-medium text-[#d1c3ae]"
                >
                  Movie & Shows: Trailers, Clips & more.🎥
                </h1>
                <p className="mt-2 font-normal">
                  Step into a world of endless entertainment with this app.
                </p>
                <motion.span className="text-[#d1c3ae] text-[20px] sm:text-[25px] mt-2 smMinus:text-[24px] flex gap-2 lg:gap-4 md:text-[22px] xl:text-[25px]">
                  {[
                    "ri-html5-line",
                    "ri-css3-line",
                    "ri-tailwind-css-fill",
                    "ri-javascript-line",
                    "ri-reactjs-fill",
                  ].map((iconClass, index) => (
                    <motion.i
                      key={index}
                      className={iconClass}
                      style={{
                        textShadow: "0px 0px 20px #d2af76",
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseOut={() => handleMouseLeave(index)}
                      animate={{
                        x: positions[index].x,
                        y: positions[index].y,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                      }}
                    ></motion.i>
                  ))}
                </motion.span>
              </motion.span>
            ) : (
              <motion.a
                href="https://bingebank.vercel.app/"
                target="_blank"
                className="text-[#d1c3ae] text-[20px] sm:-left-16 flex gap-1 justify-center items-center absolute z-30 cursor-pointer md:text-[15px] md:-left-10 mdPlus:text-[23px] mdPlus:-left-16 lg:text-[20px] lg:-left-12 xl:-left-20 xl:text-[28px] xsss:-left-4 xsss:text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                style={{
                  textShadow: "0px 0px 20px #d2af76",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Link
                <span>
                  <i className="ri-links-line"></i>
                </span>
              </motion.a>
            )}
          </AnimatePresence>

          <FoldableBingeBank
            setIsHovering={setIsHovering}
            isOpenBingeBank={isOpenBingeBank}
            setIsOpenBingeBank={setIsOpenBingeBank}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
