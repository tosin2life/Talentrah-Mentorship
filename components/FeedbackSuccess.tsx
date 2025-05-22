import React from "react";

export default function FeedbackSuccess({
  onBookSession,
  onViewHistory,
  onClose,
}: {
  onBookSession: () => void;
  onViewHistory: () => void;
  onClose?: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div
        className="relative rounded-2xl w-full max-w-sm text-center shadow-lg overflow-hidden  pt-8 pb-6 px-6"
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
        <div className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
          <span role="img" aria-label="rocket">
            🚀
          </span>
          Feedback submitted successfully!
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Thanks for your feedback! We'll use your input to improve mentorship
          sessions. If you have more thoughts, feel free to reach out
        </p>
        <button
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition mb-3"
          onClick={onBookSession}
        >
          Book another session
        </button>
        <button
          className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          onClick={onViewHistory}
        >
          View call history
        </button>
      </div>
    </div>
  );
}
