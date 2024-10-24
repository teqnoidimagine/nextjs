'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import './globals.css';
import VideoBackground from './videoBackground';
import ScrollSection from '@/app/scrollSection';
import AnimatedDivider from './components/Layout/AnimatedDivider';
import { useEffect, useState,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function RootLayout({ children }) {
  const [isBlack, setIsBlack] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.75; // Adjust the playback speed (0.75 = 75%)
    }
}, []);
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const scrollHeight = window.scrollY || window.pageYOffset;

      // Change background color at 100px or 10vh
      setIsBlack(scrollHeight >= window.innerHeight * 0.1);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="main">
        <nav className="navbar sticky top-0 z-80">
  <div className="absolute z-15 inset-0 flex gap-20 justify-between m-10 mt-0 h-[150px] items-center">
    <div className="z-16  p-4 bg-black flex items-center justify-center rounded-xl relative">
      <div className="flex flex-col items-center justify-center">
        <div className="sudo relative w-32 h-40 transition-all duration-300 ease-in-out overflow-hidden">
          <div className="bg-image-one absolute inset-0 transition-opacity duration-300 ease-in-out"></div>
          <div className="bg-image-two absolute inset-0 transition-all duration-300 ease-in-out opacity-0 w-0 h-full"></div>
        </div>
      </div>
    </div>
    <div className={`flex transition-all rounded-xl duration-500 ease-in ${isBlack ? 'bg-white text-[#1F1F1F]' : 'bg-[#1F1F1F] text-white'}`}>
      <ul>
        <li className={`transition-colors duration-500 ease-in-out ${isBlack ? 'text-[#1F1F1F]' : 'text-white'}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`transition-colors duration-500 ease-in-out ${isBlack ? 'text-[#1F1F1F]' : 'text-white'}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`transition-colors duration-500 ease-in-out ${isBlack ? 'text-[#1F1F1F]' : 'text-white'}`}>
          <Link href="/portfolio">Services</Link>
        </li>
        <li className={`transition-colors duration-500 ease-in-out ${isBlack ? 'text-[#1F1F1F]' : 'text-white'}`}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={`transition-colors duration-500 ease-in-out ${isBlack ? 'text-[#1F1F1F]' : 'text-white'}`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <div
      className={`sudo1 z-16 p-4 w-36 transition-all duration-500 ease-in-out 
        bg-black text-white
       text-center text-lg flex items-center justify-center rounded-xl`}
    >
      GET <br />
      STARTED
    </div>
  </div>
</nav>


          <AnimatePresence mode="wait">{children}</AnimatePresence>

          <VideoBackground /> 
          <ScrollSection />

  
          <footer>
<div className='video-container'>
<video
                // ref={videoRef}
                autoPlay
                loop
                muted
                className="video-background1"
            >
                <source src="/assets/FooterVideo.mp4" type="video/mp4" /></video>
</div>
       
<div
  className={`text-xl flex gap-24 px-[5%] pt-[7%] z-18 ${
    isBlack ? 'text-black' : 'text-white'
  }`}
>
  <ul className="flex flex-col text-left">
    <div className='flex gap-2 items-center ml-[-10px]'>
      <span className="w-2 h-2 bg-black"></span><span>DISCOVER</span>
    </div>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">About</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Contact</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Services</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Blog</li>
  </ul>
  
  <ul className="flex flex-col text-left">
    <div className='flex gap-2 items-center ml-[-10px]'>
      <span className="w-2 h-2 bg-black"></span><span>SERVICES</span>
    </div>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Branding &amp; UX UI Design</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Video, Animation &amp; Illustration</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Web &amp; App Development</li>
  </ul>
  
  <ul className="flex flex-col text-left">
    <div className='flex gap-2 items-center ml-[-10px]'>
      <span className="w-2 h-2 bg-black"></span><span>CASE STUDIES</span>
    </div>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">DCC Animal Hospital</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">DCC in India</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">A&apos;alda Vet 360</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Pandaa</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Roperro</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Azar</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Audi</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Slide</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Make in India</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Indigo</li>
    <li className="hover:underline hover:underline-offset-4 hover:decoration-[1px] transition duration-300 ease-in-out cursor-pointer hover:text-blue-500">Jobket</li>
  </ul>
</div>



            <AnimatedDivider />
            <div className="custom-footer-marquee  mt-8 ">
              <p className=" custom-footer-text">
                <span className="font-gangItem font px-10">TEQNOID</span>
                <span className="font-gangItem font px-10">TO BUILD</span>
                <span>YOUR</span>
                <span className="font-gangItem font px-5 font-normal">
                  VISION
                </span>
                <span>TEQNOID</span>
                <span className="font-gangItem font px-10">TO BUILD</span>
                <span>YOUR</span>
                <span className="font-gangItem font px-5 font-normal">
                  VISION
                </span>
                <span>TEQNOID</span>

                <span className="font-gangItem font px-10">TEQNOID</span>
                <span className="font-gangItem font px-10">TO BUILD</span>
                <span>YOUR</span>
                <span className="font-gangItem font px-5 font-normal">
                  VISION
                </span>
                <span>TEQNOID</span>
                <span className="font-gangItem font px-10">TO BUILD</span>
                <span>YOUR</span>
                <span className="font-gangItem font px-5 font-normal">
                  VISION
                </span>
                <span>TEQNOID</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
