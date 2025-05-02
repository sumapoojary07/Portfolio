import './Services.css';
import HeartEmoji from "../../assets/heartemoji.png";
import Glasses from "../../assets/glassesimoji.png";
import Humble from "../../assets/humble.png";
import Resume from './sumalatha.pdf'
import Card from '../Card/Card';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Personal </span>
        <span>skills</span>
        <span>
        Strong problem-solving and analytical skills help me write efficient and reliable code.
          <br />
          I communicate clearly and collaborate well in team-based development environments.
        </span>
        <a href={Resume} download>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
        <button className="button s-button">Download CV</button>
        </a>
        
        {/* <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div> */}
      </div>

      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Building visually neat and user-friendly web pages."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Designing intuitive and visually appealing interfaces focused on user experience, usability, and responsiveness."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
