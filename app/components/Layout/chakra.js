// /app/Chakra.js

"use client"; // Needed for Next.js with GSAP

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Chakra = () => {
  const chakraRef = useRef(null);

  useEffect(() => {
    // GSAP circular motion animation
    gsap.to(chakraRef.current, {
      duration: 6,
      rotation: 360,
      repeat: -1, // Infinite loop
      ease: "linear",
      motionPath: {
        path: [
          { x: 200, y: 0 },
          { x: 100, y: 200 },
          { x: -100, y: 200 },
          { x: -200, y: 0 },
          { x: -100, y: -200 },
          { x: 100, y: -200 },
          { x: 200, y: 0 },
        ],
      },
    });
  }, []);

  return (
    <div className="chakra-container">
      <div className="chakra" ref={chakraRef}>
        {/* Chakra content goes here */}
        🌀 {/* Emoji for demo purposes */}
      </div>
    </div>
  );
};

export default Chakra;
