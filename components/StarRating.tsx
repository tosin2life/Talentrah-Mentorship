import { useState } from "react";
import Stars from "@/components/Icons/Stars";

export default function StarRating({
  max = 5,
  value,
  onChange,
  className = "",
}: {
  max?: number;
  value?: number;
  onChange?: (rating: number) => void;
  className?: string;
}) {
  const [rating, setRating] = useState(value || 0);
  const [hover, setHover] = useState<number | null>(null);

  // If value is controlled, use it; otherwise use local state
  const displayRating = value !== undefined ? value : rating;

  const handleClick = (star: number) => {
    setRating(star);
    onChange?.(star);
  };

  return (
    <div
      className={`flex space-x-1 ${className}`}
      role="radiogroup"
      aria-label="Star rating"
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover(star)}
          onBlur={() => setHover(null)}
          onClick={() => handleClick(star)}
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          aria-checked={star === displayRating}
          role="radio"
          className="focus:outline-none"
        >
          <Stars
            filled={star <= (hover ?? displayRating)}
            className={
              star <= (hover ?? displayRating)
                ? "text-yellow-400 w-10 h-10"
                : "text-gray-300 w-10 h-10"
            }
          />
        </button>
      ))}
    </div>
  );
}
