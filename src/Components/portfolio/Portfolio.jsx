import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import weather from "../../assets/weather.png";
import Blood from "../../assets/blood.png";
import Ems from "../../assets/ems.png";
import { themeContext } from '../../Context';

const projects = [
  { key: "weather", image: weather, title: "Weather App" },
  { key: "blood-donation", image: Blood, title: "Blood Donation App" },
  { key: "event-management", image: Ems, title: "Event Management App" },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        grabCursor={true}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="portfolio-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="portfolio-card"
              onClick={() => navigate(`/project/${project.key}`)}
            >
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <h3>{project.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
