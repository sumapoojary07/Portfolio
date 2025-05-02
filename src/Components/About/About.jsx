// About.jsx
import './About.css';
import me from '../../assets/me.jpg';  // Your profile image
import { useContext } from 'react';
import { themeContext } from '../../Context';

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`about ${darkMode ? 'dark' : 'light'}`} id="About">
      <div className="a-container">
        <div className="a-left">
          <img className="profile-img" src={me} alt="Sumalatha" />
        </div>

        <div className="a-right">
          <h2>About Me</h2>
          <p>
            Hi, I am Sumalatha, a passionate frontend developer with an eagerness to learn and grow in the tech industry. I specialize in creating intuitive and responsive web interfaces.
          </p>
          <h3>Education</h3>
          <p>
          I am currently pursuing a Master's degree in Computer Applications (MCA), which is providing me with a strong foundation in computer science and software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
