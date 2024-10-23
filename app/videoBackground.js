"use client"
import { useEffect, useRef } from 'react';
import './videoBackground.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

const VideoBackground = () => {
    const videoRef = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);
    const mySvg = "/assets/ss.svg";
    const mySvgBG = "/assets/ss0.svg";

    useEffect(() => {
      const pin = gsap.fromTo(
        document.querySelector('.marquee-container'),
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".trigger-section",
            start: "top top",
            end: "2000 top",
            scrub: 0.05,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }, []);
  
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Adjust the playback speed (0.75 = 75%)
        }
    }, []);

    return (
        <div>
          {/* First section with background SVG */}
          <div className='relative w-full h-[100vh] overflow-hidden bg-black'>
  <div className='z-12 absolute flex items-end justify-end'>
    <Image src={mySvgBG} alt="My SVG" width={900} height={900} className='w-[100vw] h-[80vh] m-20 ml-96 right-0 ' />
  </div>
  
  <div className='z-13 absolute flex justify-center items-center'>
    <div className="text-[150px] marquee font-uppercase text-white uppercase">
      <p>
      Frontend web development - Backend development
      </p>
    </div>
  </div>

  <div className='z-14 absolute flex items-end justify-end'>
    <Image src={mySvg} alt="My SVG" width={900} height={900} className='w-[100vw] h-[80vh] m-20 ml-96 right-0' />
  </div>
</div>

          {/* Video Section 1 */}
          <div className="video-section trigger-section relative z-40 w-full h-screen">
            <video
              ref={videoRef}
              autoPlay
              loop
              preload="metadata"
              muted
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/texture2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl uppercase w-full font-bold flex items-center justify-center text-center">
          <p className="animate-text ">
            <span>Empowering </span>
            <span className="font-gangItem font px-10 font-normal"> Startups At</span>
            <span>Every</span><br />
            <span className="font-gangItem font px-5 font-normal">Stage from Pre-seed </span>
            <span>to series C</span><br />
          </p>
        </h1>
            </div>
          </div>

        

          {/* Video Section 3 */}
          <div className="video-section relative z-40 w-full h-screen">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/shortTexture.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
            <h1 className="text-7xl uppercase w-full font-bold flex items-center justify-center text-center">
          <p className="animate-text ">
          <span>Ai to </span>
            <span className="font-gangItem font px-10 font-normal"> SaaS</span>
            <span>to</span><br />
            <span className="font-gangItem font px-5 font-normal">Deeptech </span>
            {/* <span>to series C</span><br /> */}
          </p>
        </h1>
            </div>
          </div>
            {/* Video Section 2 */}
            <div className="video-section relative z-40 w-full h-screen">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/bgGradient.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
            <h1 className="text-7xl uppercase w-full font-bold flex items-center justify-center text-center">
          <p className="animate-text ">
            <span>Embarce the </span>
            <span className="font-gangItem font px-10 font-normal">Next Chapter</span>
            <span>of</span><br />
            <span className="font-gangItem font px-5 font-normal">Expansion adn Potentialropel </span>
         
          </p>
        </h1>
            </div>
          </div>
        </div>
    );
};

export default VideoBackground;
