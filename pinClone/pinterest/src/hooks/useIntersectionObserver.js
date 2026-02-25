import { useEffect, useRef } from "react";

export default function useIntersectionObserver(onIntersect, options = {}) {
  const ref = useRef(null);

  // observe the current Item
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry);
        }
      });
    }, options);

    observer.observe(ref.current);

    // return callack function
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [onIntersect, options]);

  return ref;
}
