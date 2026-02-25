import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks/debounced";

const ImagesContainer = ({ query }) => {
  const [ImagesData, setImagesData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Debouncing
  const debouncedQuery = useDebounce(query, 1200);

  const observerRef = useRef(null);

  const lastImageRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new window.IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 0.7 },
      );
      if (node) observerRef.current.observe(node);
    },
    [loading, debouncedQuery],
  );

  console.log("Intersecting, loading more images... and page value is ", page);

  // download the Image

  const downloadImage = async ({ url, fileName }) => {
    // fetch the image as a blob
    await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);
        // create a temporary anchor element
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = fileName; // set the desired file name
        document.body.appendChild(a);
        a.click(); // trigger the download
        window.URL.revokeObjectURL(url); // clean up the temporary URL
      })
      .catch((error) => console.error("Error downloading image:", error));
  };
  // Fetching Images

  const fetchImages = async (pageNum) => {
    if (debouncedQuery) {
      setLoading(true);
      let url = `https://api.pexels.com/v1/search?page=${pageNum}&query=${debouncedQuery}&per_page=20`;
      await fetch(url, {
        headers: {
          Authorization:
            "hTy4C7MO5zEc67QQFauXucz8hxiexbcPMxIwXEhiUFZqYNKV93tWNFLW",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setImagesData(
            (prev) => (pageNum === 1 ? data.photos : [...prev, ...data.photos]), // if page is 1 then replace the data else append the data to the exsisting one
          );
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
        });
    } else {
      setLoading(true);
      let url = `https://api.pexels.com/v1/curated?page=${pageNum}&per_page=20`;
      await fetch(url, {
        headers: {
          Authorization:
            "hTy4C7MO5zEc67QQFauXucz8hxiexbcPMxIwXEhiUFZqYNKV93tWNFLW",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setImagesData((prev) =>
            pageNum === 1 ? data.photos : [...prev, ...data.photos],
          );
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
        });
    }
  };

  // Fetch images when page or query changes
  useEffect(() => {
    if (page === 1) {
      fetchImages(1);
    }
  }, [debouncedQuery]);

  // Fetch images when page changes
  useEffect(() => {
    if (page > 1) {
      fetchImages(page);
    }
  }, [page]);

  return (
    <div className="w-full h-full px-4 py-4 flex-1 overflow-y-auto ">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {ImagesData.map((image, idx) => {
          if (idx === ImagesData.length - 1) {
            return (
              <div ref={lastImageRef} className="mx-auto container last-image">
                <img
                  src={image.src.original}
                  alt="Image"
                  className="w-full h-auto object-cover rounded-lg break-inside-avoid mb-4  hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
                />
              </div>
            );
          }
          return (
            <div
              key={image.id}
              className="relative mx-auto container group hover:cursor-pointer"
            >
              <img
                src={image.src.original}
                alt="Image"
                className="w-full h-auto object-cover rounded-lg break-inside-avoid mb-4  hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
              />
              <div className="hidden absolute bottom-1 z-10 px-[20px] py-[10px] bg-white/30 bg-opacity-50 text-white text-sm rounded-md group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
                <button
                  onClick={() =>
                    downloadImage({
                      url: image.src.original,
                      fileName: `image_Gallery_${image.id}.jpg`,
                    })
                  }
                  className="text-black hover:cursor-pointer"
                >
                  download
                </button>
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="w-full text-center py-4">
            <div
              className="animate-spin inline-block size-6 border-3 border-current border-t-transparent rounded-[999px] text-primary"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesContainer;
