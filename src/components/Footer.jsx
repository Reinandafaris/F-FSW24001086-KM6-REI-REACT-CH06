import fbImg from "../assets/img/icon/icon_facebook.svg";
import igImg from "../assets/img/icon/icon_instagram.svg";
import twImg from "../assets/img/icon/icon_twitter.svg";
import twtchImg from "../assets/img/icon/icon_twitch.svg";
import emailImg from "../assets/img/icon/icon_mail.svg";

const Footer = () => {
  return (
    <footer id="footer" className="container justify-content-between">
      <div className="row">
        <div data-aos="fade-right" className="address col-sm-3">
          <p>
            Jalan Suroyo No. 161 Mayangan Kota
            <br />
            Probolonggo 672000
          </p>
          <a href="mailto:binarcarrental@gmail.com">
            binarcarrental@gmail.com
          </a>
          <a href="tel:+6281-233-334-808">081-233-334-808</a>
        </div>
        <div data-aos="fade-right" className="footer__link col-sm-3">
          <ul>
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#why-us">Why Us</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-right"
          className="footer__social-media col-sm-3"
        >
          <p>Connect with us</p>
          <div className="d-flex">
            <a href="#">
              <img src={fbImg} alt="Facebook" />
            </a>
            <a href="#">
              <img src={igImg} alt="Instagram" />
            </a>
            <a href="#">
              <img src={twImg} alt="Twitter" />
            </a>
            <a href="#">
              <img src={twtchImg} alt="Twitch" />
            </a>
            <a href="#">
              <img src={emailImg} alt="Email" />
            </a>
          </div>
        </div>
        <div data-aos="fade-right" className="copyright col-sm-3">
          <span className="d-block">Copyright Binar 2024</span>
          <div className="logo"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
