import PropTypes from "prop-types";
import "./TestimonialsSection.css";

const TestimonialsSection = ({ className = "" }) => {
  return (
    <div className={`testimonials-section ${className}`}>
      <div className="subheading1">Testimonials</div>
      <b className="heading1">
        <p className="what-people-say">What people say</p>
        <p className="what-people-say">about Us.</p>
      </b>
      <img className="testimonials-section-child" alt="" src="/group-61.svg" />
      <div className="group-parent">
        <div className="group-div">
          <div className="group-child2" />
          <div className="taher-afsar">Taher Afsar</div>
          <div className="web-tech-head">Web Tech Head</div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child3" />
          <div className="testimonail">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </div>
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="vedant-naik">Vedant Naik</div>
          <div className="mumbai-india">Mumbai, India</div>
        </div>
        <img className="pagination-icon" alt="" src="/pagination.svg" />
      </div>
    </div>
  );
};

TestimonialsSection.propTypes = {
  className: PropTypes.string,
};

export default TestimonialsSection;
