"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./globals.css";
import VideoBackground from "@/app/videoBackground";
import ScrollSection from "@/app/scrollSection";
import AnimatedDivider from "./components/Layout/AnimatedDivider";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  const [isBlack, setIsBlack] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.scrollY || window.pageYOffset;

    // Change background color at 100px or 10vh
    if (scrollHeight >= window.innerHeight * 0.1) {
      setIsBlack(true);
    } else {
      setIsBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBlack]);

  return (
    <html lang="en">
      <body>
        <div className="main">
          <nav className="navbar sticky top-0 z-50">
            <div className="absolute z-15 inset-0 flex gap-20 justify-between m-10 mt-0 h-[150px] items-center">
              <div className="z-16 p-4 bg-black flex items-center justify-center rounded-xl relative">
                <div className="flex flex-col items-center justify-center">
                  <div className="sudo relative w-20 h-40 transition-all duration-300 ease-in-out overflow-hidden">
                    <div className="bg-image-one absolute inset-0 transition-opacity duration-300 ease-in-out"></div>
                    <div className="bg-image-two absolute inset-0 transition-all duration-300 ease-in-out opacity-0 w-0 h-full"></div>
                  </div>
                </div>
              </div>
              <div className={`flex ${isBlack ? "bg-white text-black" : ""}`}>
                <ul>
                  <li className={`${isBlack ? "text-black" : "text-white"}`}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={`${isBlack ? "text-black" : "text-white"}`}>
                    <Link href="/about">About</Link>
                  </li>
                  <li className={`${isBlack ? "text-black" : "text-white"}`}>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li className={`${isBlack ? "text-black" : "text-white"}`}>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className={`${isBlack ? "text-black" : "text-white"}`}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className={`sudo1 z-16 p-4 w-36 ${isBlack ? "bg-white text-black" : "bg-black text-white"} text-center text-lg flex items-center justify-center rounded-xl`}>
                GET <br />
                STARTED
              </div>
            </div>
          </nav>

          <AnimatePresence mode="wait">{children}</AnimatePresence>

          <VideoBackground />
          <ScrollSection />
          <footer>
            <div className={`text-xl flex gap-24 px-[5%] pt-[15%] ${isBlack ? "text-black" : "text-white"}`}>
              <ul className="flex flex-col text-left">
                DISCOVER
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
              <ul className="flex flex-col text-left">
                SERVICES
                <li>Branding &amp; UX UI Design</li>
                <li>Video, Animation &amp; Illustration</li>
                <li>Web &amp; App Development</li>
              </ul>
              <ul className="flex flex-col text-left">
                CASE STUDIES
                <li>DCC Animal Hospital</li>
                <li>DCC in India</li>
                <li>A&apos;alda Vet 360</li>
                <li>Pandaa</li>
                <li>Roperro</li>
                <li>Azar</li>
                <li>Audi</li>
                <li>Slide</li>
                <li>Make in India</li>
                <li>Indigo</li>
                <li>Jobket</li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
