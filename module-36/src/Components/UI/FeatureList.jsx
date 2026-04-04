import { FaCheck } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

export default function FeatureList({ features }) {
  return (
    <ul className="flex flex-col gap-2 text-xs">
      {features.map((text, i) => (
        <li key={i} className="flex gap-2">
          <FaCheck color="green" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
