
/**
 * Footer component displays the website's footer section.
 *
 * - Shows "Terms & Conditions" text.
 * - Renders a list of social media icons from the `socialImgs` constant.
 * - Displays the current year and copyright notice.
 *
 * @component
 * @returns {JSX.Element} The rendered footer section.
 */
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rahul Meghani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
