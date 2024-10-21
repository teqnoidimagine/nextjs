// components/GradientSketch.js
"use client"
import  { useEffect } from 'react';
import p5 from 'p5';

const GradientSketch = () => {
  useEffect(() => {
    const sketch = (p) => {
      let t = 0; // Time variable for the gradient transition

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.noLoop(); // Stop looping by default
      };

      p.draw = () => {
        p.background(0); // Black background

        // Calculate the gradient color based on time
        const red = p.lerp(255, 255, t); // Red component remains 255
        const green = p.lerp(0, 165, t); // Green transitions from 0 to 165
        const blue = p.lerp(0, 0, t); // Blue component remains 0

        // Set the fill color for the gradient
        const gradientColor = p.color(red, green, blue);

        // Draw a rectangle covering the entire canvas with the gradient color
        p.fill(gradientColor);
        p.rect(0, 0, p.width, p.height);

        // Update the time variable
        t += 0.01;
        if (t > 1) t = 0; // Reset t for looping
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    const canvas = new p5(sketch);

    // Cleanup on component unmount
    return () => {
      canvas.remove();
    };
  }, []);

  return null; // p5.js will manage the canvas itself
};

export default GradientSketch;
