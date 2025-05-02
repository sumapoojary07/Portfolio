import PropTypes from "prop-types"; 
import "./FloatingDiv.css";

const FloatingDivComponent = ({  txt1, txt2 }) => {
    return (
        <div className="floatingdiv">
        {/* <img src={image} alt="Icon" /> */}
        <span>
          {txt1}
          <br />
          {txt2}
        </span>
      </div>
    );
};

// ✅ Add PropTypes validation
FloatingDivComponent.propTypes = {
    image: PropTypes.string.isRequired, 
    txt1: PropTypes.string.isRequired,
    txt2: PropTypes.string.isRequired,
};
export default FloatingDivComponent