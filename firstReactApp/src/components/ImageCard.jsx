import React from "react";
import MyButton from "./MyButton";

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-slate-300"}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.389 2.413c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.614 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z"
    />
  </svg>
);

const ImageCard = ({
  image = "https://m.media-amazon.com/images/I/71B0Gu0Iz1L.jpg",
  title = "Samsung Laptop",
  description = "High performance laptop with sleek design and long-lasting battery.",
  price = "450.00",
  rating = 4.2,
}) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="max-w-xs w-full bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/70 text-slate-900 dark:text-white text-sm font-semibold px-2 py-1 rounded">
          ${price}
        </div>

        <div className="absolute top-3 right-3">
          <button className="bg-white/90 dark:bg-slate-900/60 p-2 rounded-full shadow-sm hover:scale-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate">{title}</h3>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center -ml-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < roundedRating} />
            ))}
          </div>
          <span className="text-sm text-slate-500">{rating.toFixed(1)}</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 h-14 overflow-hidden">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <MyButton className="px-4 py-2">Add to Cart</MyButton>
          <button className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-300">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
