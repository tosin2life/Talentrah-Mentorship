// components/MentorshipRating.tsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface MentorshipRatingProps {
  onClose: () => void;
}

const MentorshipRating: React.FC<MentorshipRatingProps> = ({ onClose }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    // Handle submission logic here
    console.log({ rating, comment });
    alert(`Rating: ${rating} star(s)\nComment: ${comment || "No comment"}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative rounded-2xl w-full max-w-sm text-center shadow-lg overflow-hidden">
        {/* Gradient background as in your image */}
        <div
          className="p-6"
          style={{
            background:
              "linear-gradient(180.14deg, #0967D2 -31.04%, #E6F1FF 15.63%, #FFFFFF 39.67%)",
          }}
        >
          <button
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="text-xl font-semibold mb-2">
            🚀 How was your mentorship session?
          </div>

          <p className="text-gray-600 text-sm mb-5">
            Your feedback helps us improve and offer better guidance. Let us
            know your thoughts!
          </p>

          {step === 1 ? (
            <>
              <div className="flex justify-center m-8 space-x-2">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={ratingValue}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        className="hidden"
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        size={32}
                        className="cursor-pointer transition-colors"
                        color={
                          ratingValue <= (hover || rating)
                            ? "#facc15"
                            : "#e5e7eb"
                        }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={rating === 0}
                className={`w-full py-2 rounded-lg text-base font-medium transition ${
                  rating === 0
                    ? "bg-blue-100 text-blue-300 cursor-not-allowed"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                Next
              </button>
            </>
          ) : (
            <>
              <div className="text-left mb-2 font-medium text-sm text-gray-700">
                Leave a comment (optional)
              </div>
              <textarea
                placeholder="Write here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-24 p-3 border border-gray-300 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none text-sm"
              />
              <button
                onClick={handleSubmit}
                className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorshipRating;
