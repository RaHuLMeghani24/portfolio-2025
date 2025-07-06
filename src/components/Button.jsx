/**
 * A reusable CTA button component.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.text - The text to display inside the button.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.id] - Optional ID to control scroll behavior.
 * @returns {JSX.Element} The rendered CTA button.
 *
 * @example
 * <Button text="Learn More" className="my-custom-class" id="cta-btn" />
 *
 * When clicked, the button smoothly scrolls to the section with ID "counter",
 * applying a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById("counter"); // Find the section with ID "counter"

        // Only scroll if we found the section and an ID is passed in
        // taht prevents the contact button from scrolling to the top
        if (target && id) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
