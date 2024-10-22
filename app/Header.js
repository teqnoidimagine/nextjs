"use client";
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import gsap from 'gsap';
// import Logo from '@/app/assets/logo.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Chakra from './components/Layout/chakra'
 const Header = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null); // Reference to the horizontal scroll container
  const sketchRef = useRef(); // Reference to the p5.js sketch container

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      if (container.scrollWidth > 0) {
        gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${container.scrollWidth}`,
            pin: true,
            scrub: true,
          },
        });
      } else {
        console.error("Container scrollWidth is zero or invalid.");
      }
    } else {
      console.error("Container is not defined.");
    }

    if (typeof window !== 'undefined') {
      gsap.from(".animate-text span", {
        y: 50,
        opacity: 0.6,
        duration: 1.5,
        ease: "power1.in",
        stagger: 0.5
      });
      gsap.to(".animate-text span", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.in",
        stagger: 0.5
      });
    }
  }, []);

  useEffect(() => {
    let blocks = [];
    let cols, rows, size = 80;
    let mouseMoved = false;
    let timer;
    let lastMouseX, lastMouseY;
    let speed = 0;

    class Block {
      constructor(x, y, i, j) {
        this.x = x;
        this.y = y;
        this.i = i;
        this.j = j;
        this.originalColor = '#1f1f1f'; // Lighter color for the blocks
        this.c = this.originalColor;
      }

      display(p) {
        p.noFill();
        p.stroke(this.c);
        p.push();
        p.translate(this.x, this.y);
        this.drawRect(p);
        p.pop();
      }

      paint(color) {
        if (color === this.originalColor && this.c === '#6957F7') {
          setTimeout(() => {
            this.c = this.originalColor;
            this.isPurple = false;
          }, 500);
        } else {
          this.c = color;
          if (color === '#6957F7') {
            this.isPurple = true;
          }
        }
      }

      drawRect(p) {
        p.rect(0, 0, size, size);
      }
    }

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.rectMode(p.CENTER);
        
        cols = Math.floor(p.width / size);
        rows = Math.floor(p.height / size);

        for (let i = 0; i < cols; i++) {
          blocks[i] = [];
          for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size, i, j);
          }
        }
      };

      p.draw = () => {
        p.background('#1F1F1F');

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            blocks[i][j].paint(blocks[i][j].originalColor);
          }
        }

        if (mouseMoved) {
          const boxesToHighlight = getBoxesToHighlight(speed);

          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              let block = blocks[i][j];
              const isHovered = (p.mouseX > block.x - size / 2 && p.mouseX < block.x + size / 2 &&
                                p.mouseY > block.y - size / 2 && p.mouseY < block.y + size / 2);
              if (isHovered) {
                block.paint('#6957F7'); // Lighter purple color
                highlightNeighbors(i, j, boxesToHighlight);
              }
              block.display(p);
            }
          }

          if (lastMouseX !== undefined && lastMouseY !== undefined) {
            const distMoved = p.dist(p.mouseX, p.mouseY, lastMouseX, lastMouseY);
            speed = distMoved;
          }

          lastMouseX = p.mouseX;
          lastMouseY = p.mouseY;
        } else {
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              blocks[i][j].display(p);
            }
          }
        }
      };

      function getBoxesToHighlight(speed) {
        if (speed > 15) return Math.min(10, 4); // Cap at 10 boxes
        if (speed > 10) return Math.min(10, 3);
        if (speed > 5) return Math.min(10, 2);
        if (speed > 2) return Math.min(10, 2);
        if (speed > 0) return Math.min(10, 1);
        return 0;
      }

      function highlightNeighbors(i, j, boxesToHighlight) {
        const directions = [
          { di: 0, dj: 1 },
          { di: 0, dj: -1 },
          { di: 1, dj: 0 },
          { di: -1, dj: 0 },
          { di: 1, dj: 1 },
          { di: -1, dj: -1 },
          { di: 1, dj: -1 },
          { di: -1, dj: 1 },
        ];

        for (let k = 0; k < boxesToHighlight; k++) {
          const dir = directions[k % directions.length];
          const ni = i + dir.di;
          const nj = j + dir.dj;
          if (ni >= 0 && ni < cols && nj >= 0 && nj < rows) {
            blocks[ni][nj].paint('#6957F7'); // Lighter purple
          }
        }
      }

      p.mouseMoved = () => {
        mouseMoved = true;
        clearTimeout(timer);

        timer = setTimeout(() => {
          mouseMoved = false;
        }, 100);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        cols = Math.floor(p.width / size);
        rows = Math.floor(p.height / size);

        blocks = [];
        for (let i = 0; i < cols; i++) {
          blocks[i] = [];
          for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size, i, j);
          }
        }
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div>
    
      <div ref={sketchRef} className="fixed top-0 left-0 z-0 w-full h-[2000px]" />
   

      <div className="absolute inset-0 flex items-center justify-center z-10 p-20 pl-48">
        <div className="text-center mt-8 animate-text text-white uppercase font-bold">
        <div className="leading-[140px] text-[155px]">
  {/* First Line: "Unleash", Chakra SVG, and "your" */}
  <div className="flex items-start">
    <span className="bg-[#D9F24E] text-[#1f1f1f] p-5 transform rotate-[-3deg] inline-block">
      Unleash
    </span>

    {/* Chakra SVG immediately after "Unleash" */}
    <span className="inline-block m-2 mt-[-32px]">
      <Chakra />
    </span>

    <span className="inline-block">
      your
    </span>
  </div>

  {/* Second Line: "Brand Potential" */}
  <div className="block">
    Brand  Potential
  </div>
</div>



          <span className="block leading-[140px] text-[155px]">
         
          </span>
        </div>
      </div>
      <div ref={containerRef} className="relative" />
    </div>
  );
};

export default Header;
