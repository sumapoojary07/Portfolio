import { useParams, useNavigate } from "react-router-dom";
import weather from "../../assets/weather.png";
import Blood from "../../assets/blood.png";
import Ems from "../../assets/ems.png";
import "./ProjectDetail.css";

const projectData = {
  "weather": {
    image: weather,
    title: "Weather App",
    description: "This is a weather app using OpenWeatherMap API. It lets users search for a city and get real-time temperature, weather conditions, humidity, and wind speed.",
    tech: ["React", "CSS", "JavaScript", "OpenWeatherMap API"],
    features: [
      "Live weather data",
      "Responsive UI",
      "Search functionality",
      "API integration"
    ]
  },
  "blood-donation": {
    image: Blood,
    title: "Blood Donation App",
    description: "A platform to help individuals donate blood and save lives. It provides users with information about blood donation centers, the donation process, and upcoming blood donation camps.",
    tech: ["PHP", "HTML", "CSS"],
    features: [
      "Search for nearby blood donation centers",
      "Register for upcoming blood donation camps",
      "Track your blood donation history"
    ]
  },
  "event-management": {
    image: Ems,
    title: "Event Management App",
    description: "An event management platform that helps users create, organize, and manage events. It allows users to register for events, view event details, and receive reminders.",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    features: [
      "Create and manage events",
      "Event registration and RSVP",
      "View event details and reminders",
      "Responsive design"
    ]
  }
};

const ProjectDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const project = projectData[title?.toLowerCase()];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="detail-image" />
      <p>{project.description}</p>

      <h3>Tech Stack:</h3>
      <ul>
        {project.tech.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Features:</h3>
      <ul>
        {project.features.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button className="close-btn" onClick={() => navigate("/")}>Close</button>
    </div>
  );
};

export default ProjectDetail;
