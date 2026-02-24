import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Image = ({ src, ref }) => {
  const { isVisible } = useIntersectionObserver();

  console.log("Image is visible:", isVisible);
  return (
    <div ref={ref} className="break-inside-avoid overflow-hidden rounded-lg">
      {isVisible ? (
        <img
          src={src}
          alt="Image"
          className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
        />
      ) : (
        <div className="w-full aspect-square bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default Image;
