import React, { useEffect, useState } from "react";
import redux from "../assets/images/redux.svg";
import framerMotion from "../assets/images/framer-motion.svg";
import tailwind from "../assets/images/tailwind-css-2.svg";
import js from "../assets/images/logo-javascript.svg";
import react from "../assets/images/react-2.svg";
import git from "../assets/images/git-icon.svg";
import { motion } from "framer-motion";
import rikKurta from "../assets/images/rikKurtaCropped.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Professional({ setIsHovering }) {
  return (
    <motion.div
      className="flex flex-col w-full h-screen font-poppins items-center sm:items-start"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="aboutMe flex w-[90vw] md:w-[700px] sm:w-[600px]  mx-auto flex-col">
        <div className="flex items-start gap-0 flex-wrap">
          <p
            className="text-[#d1c3ae]"
            style={{
              textShadow: "0px 0px 20px #d2af76",
            }}
          >
            I believe when life gives you{" "}
            <span
              className="text-[#d1c3ae]"
              style={{
                textShadow: "0px 0px 20px #d2af76",
              }}
            >
              HTML
            </span>
            , you should use
            <span
              className="text-[#d1c3ae]"
              style={{
                textShadow: "0px 0px 20px #d2af76",
              }}
            >
              {" "}
              CSS
            </span>{" "}
            and
            <span
              className="text-[#d1c3ae]"
              style={{
                textShadow: "0px 0px 20px #d2af76",
              }}
            >
              {" "}
              JavaScript{" "}
            </span>
            to give some life to it in return.
          </p>
          <h1 className="mt-2">
            Hey there! I’m{" "}
            <span
              className="text-[#d1c3ae]"
              style={{
                textShadow: "0px 0px 20px #d2af76",
              }}
            >
              Ritik Singh, BCA Graduate
            </span>
            , a passionate{" "}
            <span
              className="text-[#d1c3ae]"
              style={{
                textShadow: "0px 0px 20px #d2af76",
              }}
            >
              frontend web developer{" "}
            </span>
            <span>
              who loves creating clean, responsive, and engaging web
              experiences. I take pride in my expertise in responsive design,
              ensuring that every project looks stunning and performs flawlessly
              across devices.
            </span>
          </h1>
          <motion.span className="flex justify-center w-full mt-2 sm:mt-8 z-40">
            <motion.img
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              src={`${rikKurta}`}
              alt="rikPic"
              className="md:w-52 md:h-52 w-40 h-40 bg-[#846C8A] rounded-full object-cover "
            />
          </motion.span>
        </div>

        <motion.h1
          className="flex justify-center my-4 md:my-8 smMinus:text-2xl sm:text-3xl text-lg xsss:text-base font-jose text-nowrap"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Code is my Language, Logic is my&nbsp;
          <span
            className="text-[#d1c3ae]"
            style={{ textShadow: "0px 0px 20px #d2af76" }}
          >
            Mindset.
          </span>
        </motion.h1>
        <div className="technologies">
          <motion.h1
            className="text-[#d1c3ae] sm:text-4xl text-3xl flex justify-center font-jose"
            style={{
              textShadow: "0px 0px 20px #d2af76",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Technologies
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-4  sm:mt-6  mt-4">
            <motion.div
              className="rounded-2xl border-4 border-neutral-700 sm:p-6 p-3"
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={`${tailwind}`}
                alt="reduxIcon"
                className="sm:w-[45px] sm:h-[45px] w-[45px] h-[45px]"
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-4 border-neutral-700 sm:p-6 p-3"
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={`${js}`}
                alt="reduxIcon"
                className="w-[45px] h-[45px] "
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-4 border-neutral-700 sm:p-6 p-3"
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={`${react}`}
                alt="reduxIcon"
                className="w-[45px] h-[45px] "
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-4 border-neutral-700 sm:p-6 p-3"
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={`${redux}`}
                alt="reduxIcon"
                className="w-[45px] h-[45px] "
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-4 border-neutral-700 sm:p-6 p-3"
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={`${framerMotion}`}
                alt="reduxIcon"
                className="w-[45px] h-[45px] "
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-4 border-neutral-700 sm:p-6 p-3"
              variants={iconVariants(7)}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={`${git}`}
                alt="reduxIcon"
                className="w-[45px] h-[45px] "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Professional;
