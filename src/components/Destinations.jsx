import Destination from "./Destination";
import PropTypes from "prop-types";
import "./Destinations.css";

const Destinations = ({ className = "" }) => {
  return (
    <div className={`destinations ${className}`}>
      <Destination
        rectangle14="/rectangle-14@2x.png"
        fullEurope="Full Europe"
        daysTrip="28 Days Trip"
        k="$15k"
      />
      <Destination
        propLeft="0rem"
        rectangle14="/rectangle-141@2x.png"
        fullEurope="Rome, Italty"
        propTop="1.5rem"
        daysTrip="10 Days Trip"
        propLeft1="4rem"
        k="$5,42k"
        propLeft2="15rem"
      />
      <Destination
        propLeft="22rem"
        rectangle14="/rectangle-142@2x.png"
        fullEurope="London, UK"
        propTop="1.5rem"
        daysTrip="12 Days Trip"
        propLeft1="3.5rem"
        k="$4.2k"
        propLeft2="15rem"
      />
      <div className="subheading2">Top Selling</div>
      <b className="heading2">Top Destinations</b>
    </div>
  );
};
Destinations.propTypes = {
  className: PropTypes.string,
};
export default Destinations;
