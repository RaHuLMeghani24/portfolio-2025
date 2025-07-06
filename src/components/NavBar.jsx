/**
 * NavBar component renders the navigation bar for the portfolio website.
 * 
 * Features:
 * - Displays the site logo and navigation links.
 * - Highlights the navigation bar when the user scrolls down the page.
 * - Provides a "Contact me" button.
 * 
 * State:
 * - `scrolled` (boolean): Tracks whether the user has scrolled more than 10px from the top.
 * 
 * Effects:
 * - Adds a scroll event listener to update the `scrolled` state.
 * 
 * Dependencies:
 * - Uses `navLinks` from the constants module to generate navigation links.
 * 
 * @component
 * @returns {JSX.Element} The rendered navigation bar component.
 */
import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
         Rahul Meghani
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
