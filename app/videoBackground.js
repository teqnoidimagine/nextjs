"use client"
import { useEffect, useRef } from 'react';
import './videoBackground.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import mySvg from '/assets/ss.svg'; // Path to your SVG file
import Image from 'next/image';

const VideoBackground = () => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);
    const mySvg = "/assets/ss.svg";
    const mySvgBG = "/assets/ss0.svg";
    useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 0.5,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.05,
            pin: true,
            // markers:true
          },
        }
      );
      return () => {
        {/* A return function for killing the animation on component unmount */ }
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
<div className='relative w-full h-screen overflow-hidden bg-black'>
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



{/* <div className="video-container">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="video-background"
            >
                <source src="/assets/texture2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
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
        </div> */}
       
        <div className="video-container1">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="video-background1"
            >
                <source src="/assets/shortTexture.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
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
        </div>
    );
};

export default VideoBackground;
