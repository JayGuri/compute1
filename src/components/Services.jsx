import PropTypes from "prop-types";
import "./Services.css";

const Services = ({ className = "" }) => {
  return (
    <div className={`services ${className}`}>

      <div className="group">
        {Array.from({ length: 22 }, (_, index) => (
          <div key={index} className={`grid-item ${index === 9 ? "special-color" : ""}`}>+</div>
        ))}
      </div>
      
      <div className="category">CATEGORY</div>
      <b className="we-offer-best">We Offer Best Services</b>
      <div className="category-active">
        <div className="category-active-child" />
        <div className="category-active-item" />
        <div className="engrossed-listening-park">
          Engrossed listening. Park gate sell they west hard for the.
        </div>
        <div className="best-flights">Best Flights</div>
        <img className="category-active-inner" alt="" src="/group-51.svg" />
      </div>
      <div className="category1">
        <img className="category-child" alt="" src="/group-48.svg" />
        <div className="built-wicket-longer">
          Built Wicket longer admire do barton vanity itself do in it.
        </div>
        <div className="calculated-weather">{`Calculated Weather `}</div>
      </div>
      <div className="category2">
        <div className="rectangle-parent6">
          <img className="image-25-icon" alt="" src="/Group 50.svg" />
        </div>
        <div className="barton-vanity-itself">{`Barton vanity itself do in it. Preferd to men it engrossed listening. `}</div>
        <div className="local-events">Local Events</div>
      </div>
      <div className="category3">
        <img className="category-item" alt="" src="/group-49.svg" />
        <div className="we-deliver-outsourced-container">
          <p className="we-deliver-outsourced">We deliver outsourced aviation services for military customers</p>

        </div>
        <div className="customization">Customization</div>
      </div>
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
