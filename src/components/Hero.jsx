import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero ${className}`}>
      <img className="decore-icon2" alt="" src="/decore11.svg" />
      <div className="top-nav">
        <img className="logo-icon" alt="" src="/logo.svg" />
        <div className="nav-item">Bookings</div>
        <div className="nav-item1">Flights</div>
        <div className="nav-item2">Hotels</div>
        <div className="nav-item3">Desitnations</div>
        <div className="nav-item4">Login</div>
        <div className="button">
          <div className="sign-up">Sign up</div>
          <div className="button-child" />
        </div>
        <div>
          <div>EN</div>
        </div>
      </div>
      <div className="hero-content">
        <div className="desc">
          <div className="cta">
            <div className="cta1">
              <div className="cta-child" />
              <div className="find-out-more">Find out more</div>
            </div>
            <div className="play-demo">
              <div className="play-demo1">Play Demo</div>
              <img className="play-button-icon" alt="" src="/play-button.svg" />
            </div>
          </div>
          <b className="tagline">Best Destinations around the world</b>
          <div className="desc1">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <img className="decore-icon3"  src="/decore2.svg" />
          <img className="decore-icon3"  src="/decore2.svg" />
          <div className="heading3">
            <p className="travel-enjoy">Travel, enjoy</p>
            <p className="travel-enjoy">and live a new</p>
            <p className="travel-enjoy">and full life</p>
          </div>
        </div>
        <img className="image-icon1" src="/image1.svg" />
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
