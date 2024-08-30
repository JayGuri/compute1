import PropTypes from "prop-types";
import "./Values.css";

const Values = ({ className = "" }) => {
  return (
    <div className={`values ${className}`}>
      <div className="value">
        <div className="value-child">
          <div className="group-child8" />
          <img className="selection-1-icon" alt="" src="/selection-1@2x.png" />
        </div>
        <b className="choose-destination">Choose Destination</b>
        <div className="lorem-ipsum-dolor-container">
          <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="lorem-ipsum-dolor">{`adipiscing elit. Urna, tortor tempus. `}</p>
        </div>
      </div>
      <div className="value1">
        <img className="value-child" alt="" src="/group-11.svg" />
        <div className="lorem-ipsum-dolor-container1">
          <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="lorem-ipsum-dolor">{`adipiscing elit. Urna, tortor tempus. `}</p>
        </div>
        <b className="choose-destination">Reach Airport on Selected Date</b>
      </div>
      <div className="value2">
        <div className="lorem-ipsum-dolor-container">
          <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="lorem-ipsum-dolor">{`adipiscing elit. Urna, tortor tempus. `}</p>
        </div>
        <b className="choose-destination">Make Payment</b>
        <img className="value-child" alt="" src="/group-12.svg" />
      </div>
    </div>
  );
};

Values.propTypes = {
  className: PropTypes.string,
};

export default Values;
