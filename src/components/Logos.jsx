import PropTypes from "prop-types";
import "./Logos.css";

const Logos = ({ className = "" }) => {
  return (
    <div className={`logos ${className}`}>
      <img className="image-27-icon" alt="" src="/image-27@2x.png" />
      <img className="image-28-icon" alt="" src="/image-28@2x.png" />
      <div className="rectangle-container">
        <div className="group-child1" />
        <img className="image-29-icon" alt="" src="/image-29@2x.png" />
      </div>
      <img className="image-30-icon" alt="" src="/image-30@2x.png" />
      <img className="image-31-icon" alt="" src="/image-31@2x.png" />
    </div>
  );
};

Logos.propTypes = {
  className: PropTypes.string,
};

export default Logos;
