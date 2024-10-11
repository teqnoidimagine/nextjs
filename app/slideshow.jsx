import { useEffect, useState } from "react";

export default function CardSlideshow() {
  const [activeCard, setActiveCard] = useState(1);
  const sectionsAboveHeight = 200; // Total height of sections above in vh (200vh)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      // Adjust scroll position by subtracting the height of sections above
      const adjustedScrollY = scrollY - (sectionsAboveHeight * screenHeight) / 100;

      // Ensure we are only calculating card index when the user is in the slideshow section
      if (adjustedScrollY >= 0) {
        const newCard = Math.min(5, Math.max(1, Math.floor(adjustedScrollY / screenHeight) + 1));
        setActiveCard(newCard);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[100vh]">
      {/* Sticky container that stays in place */}
      <div className="sticky top-0 h-screen flex justify-center items-center">
        {/* Card 1 */}
        <div
          className={`absolute w-72 h-96 flex justify-center items-center text-white text-2xl rounded-lg bg-red-500 transition-all duration-500 ${
            activeCard === 1 ? "z-[5]" : "z-[0]"
          }`}
        >
          Card 1
        </div>
        {/* Card 2 */}
        <div
          className={`absolute w-72 h-96 flex justify-center items-center text-white text-2xl rounded-lg bg-blue-500 transition-all duration-500 ${
            activeCard === 2 ? "z-[5]" : "z-[0]"
          }`}
        >
          Card 2
        </div>
        {/* Card 3 */}
        <div
          className={`absolute w-72 h-96 flex justify-center items-center text-white text-2xl rounded-lg bg-yellow-500 transition-all duration-500 ${
            activeCard === 3 ? "z-[5]" : "z-[0]"
          }`}
        >
          Card 3
        </div>
        {/* Card 4 */}
        <div
          className={`absolute w-72 h-96 flex justify-center items-center text-white text-2xl rounded-lg bg-green-500 transition-all duration-500 ${
            activeCard === 4 ? "z-[5]" : "z-[0]"
          }`}
        >
          Card 4
        </div>
        {/* Card 5 */}
        <div
          className={`absolute w-72 h-96 flex justify-center items-center text-white text-2xl rounded-lg bg-purple-500 transition-all duration-500 ${
            activeCard === 5 ? "z-[5]" : "z-[0]"
          }`}
        >
          Card 5
        </div>
      </div>
    </div>
  );
}
