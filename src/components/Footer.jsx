import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  let currentYear = new Date().getFullYear()

  return (
    <div className={`footer ${className}`}>
      <img className="decore-icon" alt="" src="/decore@2x.png" />
      <div className="outbound">
        <div className="social">
          <img className="social-icon" alt="" src="/social2.svg" />
          <img className="social-icon1" alt="" src="/social1.svg" />
          <img className="social-icon2" alt="" src="/social.png" />
        </div>
        <div className="discover">
          <div className="discover-our-app">Discover our app</div>
          <img className="google-play-icon" alt="" src="/google-play.svg" />
          <img className="play-store-icon" alt="" src="/play-store.svg" />
        </div>
      </div>
      <div className="company-desc">
        <div className="jadoo">Jadoo.</div>
        <div className="book-your-trip-container">
          <p className="book-your-trip">Book your trip in a minute, get full control for much longer.</p>
        </div>
      </div>
      <div className="nav-columns">
        <div className="nav-row">
          <b className="company">Company</b>
          <div className="about">About</div>
          <div className="careers">Careers</div>
          <div className="mobile">Mobile</div>
        </div>
        <div className="nav-row1">
          <b className="contact">Contact</b>
          <div className="helpfaq">Help/FAQ</div>
          <div className="careers">Press</div>
          <div className="mobile">Affilates</div>
        </div>
        <div className="nav-row2">
          <b className="company">More</b>
          <div className="about">Airlinefees</div>
          <div className="airline">Airline</div>
          <div className="low-fare-tips">Low fare tips</div>
        </div>
      </div>
      <div className="copyrights">All rights reserved@jadoo.co {currentYear} </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
