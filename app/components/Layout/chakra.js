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
    <div className="chakra-container w-20">
      <div className="chakra" >
        {/* Chakra content goes here */}
        
        <svg width="22" height="22" ref={chakraRef} viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.4256 86.5L4.09184 123.686L4.08577 123.69L11.0858 135.814L11.0918 135.81L75.4628 98.6888L75.5 172.996V173.004H89.5V172.996L89.5372 98.6888L153.908 135.81L153.914 135.814L160.914 123.69L160.908 123.686L96.5744 86.5L160.908 49.3139L160.914 49.3104L153.914 37.1861L153.908 37.1896L89.5372 74.3112L89.5 0.00350312V-0.00350312H75.5V0.00350312L75.4628 74.3112L11.0918 37.1896L11.0858 37.1861L4.08577 49.3104L4.09184 49.3139L68.4256 86.5Z" fill="#D9D9D9" stroke="#D9F24E" stroke-width="14"/>
</svg>

        {/* 🌀 Emoji for demo purposes */}
      </div>
    </div>
  );
};

export default Chakra;
