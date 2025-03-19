import { motion } from "framer-motion";

export default function FloatingCirclesWithChildren({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      {[...Array(10)].map((_, i) => {
        const isLeftSide = Math.random() > 0.5;
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              backgroundColor: "#0011FF",
              borderRadius: "100%",
              opacity: 0.4,
              top: `${Math.random() * 100}%`,
              left: isLeftSide ? `${Math.random() * 10}%` : `${90 + Math.random() * 10}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        );
      })}
      {children}
    </div>
  );
}
