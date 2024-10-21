import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedDivider = () => {
    const dividerRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;

        // Trigger animation when scrolled to the bottom
        if (scrollY + windowHeight >= documentHeight) {
            gsap.to(dividerRef.current, {
                width: '100%',
                duration: 0.5,
                ease: 'power1.out',
            });
        } else {
            gsap.to(dividerRef.current, {
                width: '0%',
                duration: 0.5,
                ease: 'power1.out',
            });
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
            className="fixed top-[66%] left-1/2 h-[1px] bg-black transform -translate-x-1/2"
            style={{ width: '0%' }} // Initial width set to 0
        />
    );
};

export default AnimatedDivider;
