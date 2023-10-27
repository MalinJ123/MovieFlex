import { motion } from "framer-motion";
import "./start.css";

function Start() {
  return (
    <>
      <section className="background pic">
        <div className="advertisment">
          <motion.h2
            className="ad new"
            initial={{ opacity: 0, x: -50, fontFamily: "Nosifer", fontSize: "50px", marginTop: "2.2em" }}
            animate={{ opacity: 1, x: 0, fontFamily: "Nosifer", fontSize: "50px", marginTop: "2.2em" }}
            transition={{ duration: 3 }}
          >
            Whats new
          </motion.h2>
          <motion.h3
            className="ad year"
            initial={{ opacity: 0, x: 50, fontFamily: "Pixelify Sans" }}
            animate={{ opacity: 1, x: 0, fontFamily: "Pixelify Sans" }}
            transition={{ duration: 3.5 }}
          >
            2023
          </motion.h3>
          <motion.h1
            className="movieflex"
            initial={{
              opacity: 0,
              transform: "translateY(-100%) scale(0.5)",
              fontFamily: "Shadows Into Light",
              fontSize: "30px",
              marginTop: "3.9em",
              color: "rgb(0, 0, 0)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0) scale(1)",
              fontFamily: "Shadows Into Light",
              fontSize: "30px",
              marginTop: "3.9em",
              color: "rgb(0, 0, 0)",
            }}
            transition={{ duration: 3.5 }}
            whileHover={{ cursor: "pointer" }}
          >
            On MovieFlex
          </motion.h1>
        </div>
      </section>
    </>
  );
}

export default Start;
