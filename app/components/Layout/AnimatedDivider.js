import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedDivider = () => {
    const dividerRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;

        // Debug: Log the scroll and window values to see if condition is working correctly
        console.log(`ScrollY: ${scrollY}, Document Height: ${documentHeight}, Window Height: ${windowHeight}`);

        // Trigger animation when scrolled to the bottom
        if (scrollY + windowHeight >= documentHeight - 1) { // Adjusting to ensure it's close to bottom
            if (dividerRef.current) {
                gsap.to(dividerRef.current, {
                    width: '100%',
                    duration: 0.5,
                    ease: 'power1.out',
                });
            }
        } else {
            if (dividerRef.current) {
                gsap.to(dividerRef.current, {
                    width: '0%',
                    duration: 0.5,
                    ease: 'power1.out',
                });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={dividerRef}
            className="fixed top-[60%] left-1/2 h-[1px] bg-neutral-400 transform -translate-x-1/2 z-28"
            style={{ width: '0%',zIndex:25 }} // Initial width set to 0
        />
    );
};

export default AnimatedDivider;
