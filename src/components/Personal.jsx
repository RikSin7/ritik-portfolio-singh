import React from "react";
import { motion } from "framer-motion";

function Personal({ setIsHovering }) {
  return (
    <motion.div
      className="flex flex-col w-full h-screen font-poppins items-center sm:items-start -mt-4 sm:mt-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
        transition={{
            duration: 0.3,
        }}
    >
      <div className="aboutMe flex w-[90vw] md:w-[700px] sm:w-[600px]  mx-auto flex-col">
        <motion.h1
          className="text-[#d1c3ae] sm:text-4xl text-3xl flex justify-center font-jose"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Personality
        </motion.h1>
        <p
          className="text-[#ffffff]"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
        >
          I embrace a balanced and adaptive personality as an{" "}
          <span className="text-[#d1c3ae]">ambivert</span>. Comfortable in both
          social and solitary settings, I thrive in environments where
          collaboration and independent problem-solving coexist harmoniously.
        </p>
        <motion.h1
          className="text-[#d1c3ae] sm:text-4xl text-3xl flex justify-center font-jose sm:mt-12 mt-8"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Strengths
        </motion.h1>
        <p>
          {" "}
          <span
            className="text-[#d1c3ae]"
            style={{ textShadow: "0px 0px 20px #d2af76" }}
          >
            Effective Communicator:{" "}
          </span>{" "}
          A natural ability to convey ideas clearly and foster understanding.
        </p>
        <p>
          {" "}
          <span
            className="text-[#d1c3ae]"
            style={{ textShadow: "0px 0px 20px #d2af76" }}
          >
            Deep Learner:{" "}
          </span>{" "}
          An insatiable curiosity drives me to master new concepts and skills
          rapidly.
        </p>
        <p>
          {" "}
          <span
            className="text-[#d1c3ae]"
            style={{ textShadow: "0px 0px 20px #d2af76" }}
          >
            Versatile Expertise:{" "}
          </span>{" "}
          While I excel in required fields, my adaptability ensures proficiency
          across diverse domains.
        </p>
        <motion.h1
          className="text-[#d1c3ae] sm:text-4xl text-3xl flex justify-center font-jose sm:mt-12 mt-8"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Hobbies
        </motion.h1>
        <p>I find joy in creative and technical pursuits alike.</p>
        <ul className="list-disc text-[#d1c3ae] ml-5">
          <li>Singing, Guitar and Music </li>
          <li>Writing Poetries</li>
          <li>Coding and Building Projects</li>
        </ul>
        <i className="mt-2">
          I am a lifelong learner and a learner always keeps evolving. My{" "}
          <span className="text-[#d1c3ae]">vision </span>
          is to continuously evolve as a{" "}
          <span className="text-[#d1c3ae]">developer</span> and contribute
          meaningfully to the{" "}
          <span className="text-[#d1c3ae]"> tech community.</span>
        </i>
      </div>
    </motion.div>
  );
}

export default Personal;
