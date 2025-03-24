import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LINE_WIDTH, DISTANCE } from "./lineValues";

export default function ScrollableLinesWithChildren({ children }) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY * 1.25);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        overflow: "hidden",
        marginTop: 20,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          left: `${DISTANCE}px`,
          top: `${scrollY}px`,
          width: `${LINE_WIDTH}px`,
          height: "40vh",
          backgroundColor: "#0011FF",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          right: `${DISTANCE}px`,
          top: `${scrollY}px`,
          width: `${LINE_WIDTH}px`,
          height: "40vh",
          backgroundColor: "#0011FF",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />

      {children}
    </div>
  );
}
