/**
 * Renders a header section with a title and a subtitle.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.title - The main title to display.
 * @param {string} props.sub - The subtitle or badge text to display above the title.
 * @returns {JSX.Element} The rendered header component.
 */
const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;