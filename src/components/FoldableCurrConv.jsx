import React, { useState } from "react";
import map from "../assets/images/map.webp";
import currConv from "../assets/images/CurrConvSs.png";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

function FoldableCurrConv({ setIsHovering, isOpenCurrConv, setIsOpenCurrConv }) {
  const [isFolded, setIsFolded] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const xDrag = useMotionValue(0);
  const xLeft = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const xRight = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left - bounds.width / 2) * 0.2;
    const y = (e.clientY - bounds.top - bounds.height / 2) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useMotionValueEvent(xDrag, "change", (currentX) => {
    if (currentX > 260) {
      setIsFolded(false);
      setIsOpenCurrConv(true);
    } else {
      setIsFolded(true);
      setIsOpenCurrConv(false);
      setIsClicked(false);
    }
  });

  const handleClick = () => {
    if (!isDragging) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <motion.div
      className=" z-20  flex justify-end w-full h-full items-center pl-16 xsss:pl-8 sm:pl-0"
      animate={isFolded ? "folded" : "open"}
      variants={{
        open: { scale: 1 },
        folded: { scale: 0.9 },
      }}
    >
      <motion.div
        className="z-20  grid aspect-video sm:p-4 p-2  w-[320px] xsss:w-[290px] smMinus:w-[400px] relative sm:w-[410px] md:w-[340px] mdPlus:w-[380px] lg:w-[420px] xl:w-[500px]"
        onClick={handleClick}
        animate={{
          scale: isClicked ? [1.2, 1, 1] : 1, // Scale up to 1.2 and return to 1
        }}
        transition={{
          type: "spring",
          stiffness: 250, // Stronger bounce
          damping: 15, // Controls oscillation
          duration: 0.5, // Total time for the bounce
        }}
      >
        <motion.div
          className={
            "aspect-video grid grid-cols-3 h-full w-full [grid-area:1/1]"
          }
        >
          {/* Left Section */}
          <motion.div
            className={`map-image bg-[size:300%] translate-x-full ${
              isOpenCurrConv && isClicked && currConv && "border-none rounded-l-2xl"
            } border-r border-black shadow-2xl shadow-black`}
            style={{
              backgroundImage: `${
                isOpenCurrConv && isClicked && currConv
                  ? `url(${currConv})` // No gradient when currConv
                  : `linear-gradient(to right, rgba(0, 0, 0, 0.4) 10%, transparent), url(${map})`
              }`,
              x: xLeft,
            }}
          />

          {/* Center Section */}
          <motion.div
            className="map-image bg-[size:300%] bg-center brightness-[--brightness]"
            style={{
              backgroundImage: `${
                isOpenCurrConv && isClicked && currConv
                  ? `url(${currConv})` // No gradient when currConv
                  : `linear-gradient(to left, rgba(0, 0, 0, 0.3) 50%, transparent), url(${map})`
              }`,
              scaleX: centerScale,
              "--brightness": centerBrightness,
            }}
          />

          {/* Right Section */}
          <motion.div
            className={`map-image bg-[size:300%] bg-right -translate-x-full ${
              isOpenCurrConv && isClicked && currConv && "border-none rounded-r-2xl"
            } border-l border-black shadow-2xl shadow-black`}
            style={{
              backgroundImage: `${
                isOpenCurrConv && isClicked && currConv
                  ? `url(${currConv})` // No gradient when currConv
                  : `linear-gradient(to left, rgba(0, 0, 0, 0.4) 10%, transparent), url(${map})`
              }`,
              x: xRight,
            }}
          />
        </motion.div>

        <motion.div
          drag={"x"}
          dragConstraints={{ left: 0, right: 300 }}
          _dragX={xDrag}
          dragTransition={{
            modifyTarget: (target) => {
              return target > 150 ? 300 : 0;
            },
            timeConstant: 100,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="[grid-area:1/1]  relative z-20 cursor-grab active:cursor-grabbing w-full h-full"
        ></motion.div>
        {!isFolded && (
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            variants={{
              open: { opacity: 1, scale: 0.9, y: 10 },
              folded: { opacity: 0, scale: 1, y: 0 },
            }}
            initial="folded"
            className="flex w-full justify-center font-jose "
          >
            <motion.p
              className={`rounded-2xl bg-white/5 text-center absolute px-4 sm:py-2 sm:-mt-1 -mt-2 font-normal cursor-pointer`}
              animate={{
                x: position.x,
                y: position.y,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              {isClicked ? "Currencyfusion" : "tap to see"}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
      {!isOpenCurrConv && (
        <motion.div
          className={`flex cursor-grab sm:z-30 rounded-2xl bg-white/5  px-3 py-2 lg:px-4 lg:py-2 md:gap-2 gap-1 text-center justify-center lg:w-28 md:w-24 sm:w-20 items-center font-jose lg:mr-4 md:mr-5 sm:mr-4 absolute `}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <motion.span
            className="font-jose font-extralight text-lg lg:text-xl sm:text-lg text-center"
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Slide
          </motion.span>
          <motion.i
            className="ri-arrow-right-circle-line text-xl sm:text-xl lg:text-2xl"
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></motion.i>
        </motion.div>
      )}
    </motion.div>
  );
}

export default FoldableCurrConv;
