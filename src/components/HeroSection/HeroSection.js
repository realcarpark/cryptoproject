import illustrationImage from "./../../img/Illustration.png";
import arrowRightIcon from "./../../icons/ArrowRight.png";


function HeroSection() {
  const emailStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '30px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    color: '#AAAAAA',
    pointerEvents: 'auto'
  };
  const textStyle = {
    pointerEvents: 'none' 
  };
  return (
    <section className="Hero-Section">
      <div className="hero-top">
        <img src={illustrationImage} alt="" className="hero-illusration" />
      </div>
      <div className="hero-left" style = {textStyle}>
        <h1>Thank you for reply my project.</h1>
        <h1>This is my test project</h1>
        <h2>Please click Register button to see more.</h2>
        <h2>Please contact me.</h2>
        <div className="hero-description">
        <a href="mailto:carpark176112@gmail.com" style={emailStyle}>
          carpark176112@gmail.com </a>
        </div>

        <button className="hero__try-btn">
          Try for FREE
          <img src={arrowRightIcon} alt="" />
        </button>
      </div>
      <div className="hero-right">
        <img src={illustrationImage} alt="" className="hero-illusration" />
      </div>
    </section>
  );
}

export default HeroSection;
