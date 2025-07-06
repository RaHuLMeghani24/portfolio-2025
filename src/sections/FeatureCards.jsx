
/**
 * FeatureCards component renders a grid of feature cards based on the `abilities` array.
 * Each card displays an image, a title, and a description.
 *
 * @component
 * @example
 * // Renders the feature cards section
 * <FeatureCards />
 *
 * @returns {JSX.Element} A grid of feature cards.
 */
import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;