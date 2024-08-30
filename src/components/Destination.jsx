import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Destination.css";

const Destination = ({
  className = "",
  propLeft,
  rectangle14,
  fullEurope,
  propTop,
  daysTrip,
  propLeft1,
  k,
  propLeft2,
  }) => {
  const destinationStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const fullEuropeStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const daysTripStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const kStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className={`destination ${className}`} style={destinationStyle}>
      <img className="destination-child" alt="" src={rectangle14} />
      <div className="card-5">
        <div className="card-5-child" />
        <div className="full-europe" style={fullEuropeStyle}>
          {fullEurope}
        </div>
        <img className="navigation-1-icon" alt="" src="/navigation-1.svg" />
        <div className="days-trip" style={daysTripStyle}>
          {daysTrip}
        </div>
        <div className="k" style={kStyle}>
          {k}
        </div>
      </div>
    </div>
  );
};

Destination.propTypes = {
  className: PropTypes.string,
  rectangle14: PropTypes.string,
  fullEurope: PropTypes.string,
  daysTrip: PropTypes.string,
  k: PropTypes.string,

  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propLeft1: PropTypes.any,
  propLeft2: PropTypes.any,
};

export default Destination;
