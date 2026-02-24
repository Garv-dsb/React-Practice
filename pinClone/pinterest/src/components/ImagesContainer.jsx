import React, { useEffect, useState } from "react";
import Image from "./Image";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useDebounce } from "../hooks/debounced";

const ImagesContainer = ({ query }) => {
  const [ImagesData, setImagesData] = useState([]);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Giving the query to the debounce function to set the value of the query after a given delay to prevent the no more Direct Search
  const debouncedQuery = useDebounce(query, 5000);

  // Use custom hook
  const { isVisible } = useIntersectionObserver({
    threshold: 1,
  });

  // Fetching Images from Pexels API based on query and page number
  const fetchImages = async () => {
    if (query) {
      setLoading(true);
      await fetch(
        `https://api.pexels.com/v1/search?page=${page}&query=${query}&per_page=20`,
        {
          headers: {
            Authorization:
              "hTy4C7MO5zEc67QQFauXucz8hxiexbcPMxIwXEhiUFZqYNKV93tWNFLW",
          },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          setImagesData(data.photos);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
        });
      return;
    } else {
      setLoading(true);
      await fetch(
        `https://api.pexels.com/v1/curated?page=${page}&query=${query}&per_page=20`,
        {
          headers: {
            Authorization:
              "hTy4C7MO5zEc67QQFauXucz8hxiexbcPMxIwXEhiUFZqYNKV93tWNFLW",
          },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          setImagesData((prev) => [...prev, ...data.photos]);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
        });
    }
  };

  // When last image is visible, load next page
  useEffect(() => {
    if (!loading) {
      page++;
    }
  }, [isVisible, loading]);

  // Fetch images when page changes
  useEffect(() => {
    fetchImages();
    if (debouncedQuery) {
      setImagesData([]);
      setPage(1);
    }
  }, [page, debouncedQuery]);

  return (
    <div className="w-full h-full px-4 py-4 flex-1 overflow-y-auto ">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {loading ? (
          <h2>Searching for query...</h2>
        ) : (
          // Images Data  mapping
          ImagesData.map((image) => {
            // else return normal image
            return (
              <div className="mx-auto container">
                <img
                  src={image.src.original}
                  alt="Image"
                  className="w-full h-auto object-cover rounded-lg break-inside-avoid mb-4  hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
                />
              </div>
            );
          })
        )}

        {/* {loading && (
          <div className="w-full aspect-square bg-gray-200 animate-pulse col-span-full" />
        )} */}
      </div>
    </div>
  );
};

export default ImagesContainer;
