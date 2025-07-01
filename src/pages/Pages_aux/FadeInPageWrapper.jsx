import React, { useEffect, useRef } from "react";
import "./FadeInPageWrapper.css";

const FadeInPageWrapper = ({ children, className = "", fast = true }) => {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (ref.current) {
      ref.current.classList.add(fast ? "fade-in-up-fast" : "fade-in-up");
    }
  }, [fast]);

  return (
    <div
      ref={ref}
      className={`${
        fast ? "fade-in-up-fast" : "fade-in-up"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default FadeInPageWrapper;
