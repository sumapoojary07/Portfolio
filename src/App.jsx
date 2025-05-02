import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/services/services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectDetail from "./Components/ProjectModel/ProjectDetails";
import About from "./Components/About/About"; // Import About Component

import { themeContext } from './Context';
import { useContext } from "react";
import './App.css';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Intro />
              <About />
              <Services />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project/:title" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} /> {/* Add About Route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
