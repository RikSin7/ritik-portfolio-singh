import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor({ isHovering }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor sm:block hidden"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 99,
      }}
      animate={{
        width: isHovering ? 40 : 10, 
        height: isHovering ? 40 : 10,
        borderWidth: isHovering ? 1 : 0, 
        backgroundColor: isHovering ? "rgba(0, 0, 0, 0)" : "#ffffff", 
        borderColor: isHovering ? "#ffffff" : "rgba(0, 0, 0, 0)", 
        mixBlendMode: isHovering ? "difference" : "normal",
      }}
      initial={{
        width: 10,
        height: 10,
        borderWidth: 0,
        backgroundColor: "#ffffff",
      }}
      transition={{
        type: "spring",
        stiffness: 120, 
        damping: 20, 
        duration: 0.6, 
      }}
    />
  );
}

export default CustomCursor;
