import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tab3 from "../assets/images/tab3.jpg";
import arrow from "../assets/images/Arrowglowy.png";
import toast from "react-hot-toast";

function ContactMe({ setIsHovering, isHovering }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validation logic
    const newErrors = {};
    if (!name || name.trim() === "") {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message || message.trim() === "") {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    // Stop submission if there are validation errors
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    // Web3Forms submission
    formData.append("access_key", "00c1c914-f925-4b1a-b8f9-ac1d701d011a");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!", {
        duration: 5000,
        position: "bottom-center",
        style: {
          backgroundColor: "#010302",
          color: "#d1c3ae",
          padding: "20px 30px 20px 30px",
          border: "1px solid #d1c3ae",
          borderRadius: "20px",
        },
      });
      e.target.reset(); // Clear the form
    } else {
      toast.error("Message failed to send! Sorry about that.", {
        duration: 5000,
        position: "bottom-center",
        style: {
          backgroundColor: "#010302",
          color: "#d1c3ae",
          padding: "20px 30px 20px 30px",
          border: "1px solid #d1c3ae",
          borderRadius: "20px",
        },
      });
    }

    setIsSubmitting(false);
  };

  const refScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["start start", "end start"],
  });
  const tab1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="min-h-[120vh] bg-black w-full flex flex-col justify-center items-center relative overflow-hidden text-white"
      ref={refScroll}
    >
      <div
        className="absolute inset-0 flex justify-center "
        style={{
          backgroundImage: `linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url('${tab3}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: tab1Y,
        }}
      >
        <motion.h1
          className="sm:text-[42px] text-[22px] absolute sm:top-10 top-5  text-center font-medium  text-[#d1c3ae]  font-jose  z-40"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Let&apos;s Connect
        </motion.h1>
        <span className=" sm:mt-20 mt-9 z-40">
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
      <div className="flex flex-col items-center justify-center gap-2 z-50  sm:mt-32 mt-16">
        <label
          htmlFor="name"
          className="justify-start flex sm:w-[500px] w-[350px] xss:w-[300px]  text-[#d1c3ae]"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
        >
          Name
        </label>
        <span
          className={`sm:w-[500px] w-[350px] xss:w-[300px] h-[60px] rounded-lg bg-white/10 flex  items-center px-4 relative ${
            errors.name ? "mb-8" : "mb-4"
          }`}
        >
          <i className="ri-user-line text-lg"></i>
          <div className={`input flex flex-col`}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-transparent outline-none placeholder:text-[#afafaf] w-full h-full px-2 py-4 absolute -translate-y-1/2 top-1/2"
            />
            {errors.name && (
              <span className="text-red-500 mt-20 -ml-8">{errors.name}</span>
            )}
          </div>
        </span>
        <label
          htmlFor="email"
          className="justify-start flex sm:w-[500px] w-[350px] xss:w-[300px] text-[#d1c3ae]"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
        >
          Email
        </label>

        <span
          className={`sm:w-[500px] w-[350px] xss:w-[300px]  h-[60px]  rounded-lg bg-white/10 flex gap-0 items-center px-4 relative ${
            errors.email ? "mb-8" : "mb-4"
          }`}
        >
          <i className="ri-mail-line text-lg"></i>
          <div className={`input flex flex-col`}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none placeholder:text-[#afafaf] w-full h-full px-2 py-4 absolute -translate-y-1/2 top-1/2"
            />
            {errors.email && (
              <span className="text-red-500 mt-20 -ml-8">{errors.email}</span>
            )}
          </div>
        </span>
        <label
          htmlFor="message"
          className="justify-start flex sm:w-[500px] w-[350px] xss:w-[300px] text-[#d1c3ae]"
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
        >
          Message
        </label>
        <div className={`input flex flex-col`}>
          <textarea
            type="text"
            rows={8}
            id="message"
            name="message"
            placeholder="Enter your message"
            className="sm:w-[500px] w-[350px] xss:w-[300px]   outline-none px-4 py-3 rounded-lg bg-white/10 placeholder:text-[#afafaf]"
          />
          {errors.message && (
            <span className="text-red-500 ml-1">{errors.message}</span>
          )}
        </div>

        <motion.div
          className="relative z-50 px-8 py-3   text-white font-poppins rounded-3xl sm:border-2 border border-[#575757]  bg-[#000000] overflow-hidden mt-4 text-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.8, transition: { duration: 0.3 } }}
        >
          <motion.button
            className="relative z-10"
            type="submit"
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
          >
            {isSubmitting
              ? "Message sent successfully. Thanks! you will be in touch soon."
              : "Send"}
          </motion.button>
          <div className="wave-effect absolute top-0 left-0 w-full h-full  bg-gradient-to-r from-[#434343] to-[#101010] animate-wave"></div>
        </motion.div>
      </div>
      <footer className="z-50 w-full flex flex-col items-center mt-8">
        <div className="flex items-center justify-center w-full gap-1">
          <h1 className="text-[#ffffff] font-jose text-5xl">Ritik</h1>
          <span className="rounded-full w-3 h-3 bg-[#cc4646] mt-3"></span>
        </div>
        <h1
          className="text-[#d1c3ae] font-poppins "
          style={{
            textShadow: "0px 0px 20px #d2af76",
          }}
        >
          singhritik2675@gmail.com
        </h1>
        <span className="w-[80vw] h-[2px] bg-[#515151] my-4"></span>
        <div className="flex sm:flex-row flex-col items-center gap-6 w-[80vw] font-poppins justify-between ">
          <h1 className="text-sm text-[#999999]">
            Ritik singh © 2024. All rights reserved.
          </h1>
          <motion.div className="z-40  text-[#d1c3ae] text-[30px] sm:text-[35px] flex gap-4 lg:text-[40px] flex-wrap cursor-pointer">
            {[
              {
                iconClass: "ri-linkedin-fill",
                url: "https://www.linkedin.com/in/ritik-singhh",
              },
              {
                iconClass: "ri-github-fill",
                url: "https://github.com/RikSin7",
              },
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
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
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
                ></motion.i>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </footer>
    </motion.form>
  );
}

export default ContactMe;
