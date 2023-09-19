import facebookIcon from "../../icons/facebook-f 1.png";
import instagramIcon from "../../icons/instagram 1.png";
import linkedinIcon from "../../icons/linkedin 1.png";
import twitterIcon from "../../icons/twitter 1.png";
import youtubeIcon from "../../icons/youtube 1.png";
import logoImage from "../../img/Logo.png";
import visaIcon from "../../icons/Visa.png";
import mastercardIcon from "../../icons/Mastercard.png";
import bitcoinIcon from "../../icons/Bitcoin.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner-top">
          <div className="footer-logo-img">
            <img src={logoImage} alt="" className="footer-logo" />
          </div>
          <div className="footer-links">
            <ul className="Quick-Link">
              <li className="Quick-Link__Title">Quick Link</li>
              <li className="Quick-Link__inner">Home</li>
              <li className="Quick-Link__inner">Products</li>
              <li className="Quick-Link__inner">About</li>
              <li className="Quick-Link__inner">Features</li>
              <li className="Quick-Link__inner">Contact</li>
            </ul>
            <ul className="Resources">
              <li className="Quick-Link__Title">Resources</li>
              <li className="Quick-Link__inner">Download Whitepapper</li>
              <li className="Quick-Link__inner">Smart Token</li>
              <li className="Quick-Link__inner">Blockchain Explorer</li>
              <li className="Quick-Link__inner">Crypto API</li>
              <li className="Quick-Link__inner">Interest</li>
            </ul>
          </div>
          <div className="footer-inner-right">
            <p className="footer-title">We accept following payment systems</p>
            <div className="payment">
              <div className="payment__inner_wrap">
                <img src={visaIcon} alt="" className="payment__inner" />
              </div>
              <div className="payment__inner_wrap">
                <img src={mastercardIcon} alt="" className="payment__inner" />
              </div>
              <div className="payment__inner_wrap">
                <img src={bitcoinIcon} alt="" className="payment__inner" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-inner-bottom">
          <p className="copyright">©2021 CRAPPO. All rights reserved</p>
          <div className="social-media">
            <img src={facebookIcon} alt="" className="social-media-inner" />
            <img src={instagramIcon} alt="" className="social-media-inner" />
            <img src={linkedinIcon} alt="" className="social-media-inner" />
            <img src={twitterIcon} alt="" className="social-media-inner" />
            <img src={youtubeIcon} alt="" className="social-media-inner" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
