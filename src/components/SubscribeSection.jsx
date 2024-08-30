import PropTypes from "prop-types";
import "./SubscribeSection.css";

const SubscribeSection = ({ className = "" }) => {
  return (
    <div className={`subscribe-section ${className}`}>
      <div className="parent">
  {Array.from({ length: 17 }, (_, index) => (
    <div key={index} className={`grid-item ${index === 4 ? "special-color" : ""}`}>+</div>
  ))}
</div>

      <img className="subscribe-section-child" alt="" src="/group-78@2x.png" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="your-email">Your email</div>
        <div className="vector-parent">
          <img className="group-item" alt="" src="/vector-5.svg" />
          <div className="group-inner" />
        </div>
      </div>
      <div className="rectangle-group">
        <div className="rectangle-div" />
        <div className="subscribe">Subscribe</div>
      </div>
      <div className="subscribe-to-get-container">
        <p className="subscribe-to-get">
          Subscribe to get information, latest news and other
        </p>
        <p className="subscribe-to-get">interesting offers about Jadoo</p>
      </div>
      <img className="subscribe-section-item" alt="" src="/group-77.svg" />
    </div>
  );
};

SubscribeSection.propTypes = {
  className: PropTypes.string,
};

export default SubscribeSection;
