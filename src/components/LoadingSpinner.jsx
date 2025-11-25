"use client";

import { MoonLoader } from "react-spinners";

/**
 * Reusable loading spinner component using MoonLoader from react-spinners
 * @param {number} size - Size of the spinner (default: 60)
 * @param {string} color - Color of the spinner (default: '#3b82f6' - blue-500)
 * @param {string} text - Optional loading text to display below spinner
 */
export default function LoadingSpinner({
  size = 60,
  text = "Loading...",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-400px)] w-full">
      <MoonLoader size={size} speedMultiplier={0.8} />
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-400  font-medium">
          {text}
        </p>
      )}
    </div>
  );
}
