import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";
import Logos from "../components/Logos";
import TestimonialsSection from "../components/TestimonialsSection";
import Image1 from "../components/Image1";
import Values from "../components/Values";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Hero from "../components/Hero";
import "./TravelAgencyLandingPageUI.css";

const TravelAgencyLandingPageUI = () => {
  return (
    <div className="travel-agency-landing-page-ui">
      <Footer />
      <SubscribeSection />
      <Logos />
      <TestimonialsSection />
      <div className="book-a-trip">
        <b className="heading">
          <p className="book-your-next">{`Book your next trip `}</p>
          <p className="book-your-next">in 3 easy steps</p>
        </b>
        <div className="image">
          <img className="image-child" alt="" src="/group-589.svg" />
          <Image1 />
        </div>
        <div className="subheading">Easy and Fast</div>
        <Values />
      </div>
      <Destinations />
      <Services />
      <Hero />
    </div>
  );
};

export default TravelAgencyLandingPageUI;
