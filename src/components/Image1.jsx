import PropTypes from "prop-types";
import "./Image1.css";

const Image1 = ({ className = "" }) => {
  return (
    <div className={`image1 ${className}`}>
      <div className="rectangle-parent2">
        <div className="group-child4" />
        <img className="options-icon" src="/options.svg" />
        <img className="building-1-icon"  src="/building-1@2x.png" />
        <div className="people-going">24 people going</div>
        <div className="june">14-29 June</div>
        <div className="by-kartik">by Kartik</div>
        <img className="rectangle-icon"  src="/rectangle-17@2x.png" />
        <div className="trip-to-greece">Trip To Greece</div>
        <div className="line-div" />
      </div>
      <div className="rectangle-parent3">
        <div className="group-child5" />
        <div className="trip-to-rome">Trip to rome</div>
        <div className="completed">
          <span>40%</span>
          <span className="completed1"> completed</span>
        </div>
        <div className="ellipse-div" />
        <img className="mask-group-icon"  src="/mask-group@2x.png" />
        <div className="ongoing">Ongoing</div>
        <div className="rectangle-parent4">
          <div className="group-child6" />
          <div className="group-child7" />
        </div>
      </div>
      <img className="heart-6-1" src="/heart-6-1.svg" />
    </div>
  );
};

Image1.propTypes = {
  className: PropTypes.string,
};

export default Image1;
