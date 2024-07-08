import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
function LazyLoadedDiv({ children }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Log visibility state for debugging
        console.log("Is visible:", entry.isIntersecting);

        // When the div becomes visible in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after the div is loaded
          observer.unobserve(entry.target);
        }
      },
      // Additional options for the observer
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin around the root
        threshold: 0.3, // Adjust threshold for smaller screens
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0, // Set opacity based on visibility
        transition: "opacity 1s ease-in-out", // Add transition effect
      }}
    >
      {children}
    </div>
  );
}

export default LazyLoadedDiv;
