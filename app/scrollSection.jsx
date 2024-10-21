"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import sea from "@/web/public/assets/sea.jpg"
// import boat from "@/web/public/assets/boat.jpg"
// import sky from "@/web/public/assets/sky.jpg"
import Image from "next/image";
import {CardSection }from '@/app/cards'
import GradientSketch from "@/app/gradientSketch"
import VideoBackground from "./videoBackground"
function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
<>

    {/* <section className="scroll-section-outer">
    
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <Image src={sea}/>
          </div>
          <div className="scroll-section">
          <Image src={boat}/>
          </div>
          <div className="scroll-section">
          <Image src={sky}/>
          </div>
         
          
        </div>
      </div>
      <section>
    <div  className="flex align-middle justify-between  items-center bg-[#fffffa]">
      <div  className="flex flex-col align-middle justify-center text pl-[20vh] py-[15vh] items-baseline">
        <p className="text-2xl ">Our powerful payment APIs are built to scale with you from day one to millions of users. Let's start building.</p>
        <button className="text-2xl bg-black p-8 text-white mt-5 rounded-xl">View API Docs</button>
      </div>
        <h1 className="text-9xl p-[30vh] py-[15vh] font-bold flex items-center justify-center text-center">
          <p className="animate-text ">
            <span>TOOLS</span>
            <span className="font-gangItem font px-10 font-normal">TO BUILD</span>
            <span>YOUR</span><br />
            <span className="font-gangItem font px-5 font-normal">VISION</span>
           
          </p>
        </h1>
      </div>
    </section>
  
      <div className="cardContainer">
        <div className="card bg-slate-500 "> 
card1
        </div>
        <div className="card bg-slate-800 "> 
        card 2
</div>
<div className="card bg-slate-100 "> 
card 3
</div>
      
      </div>
    </section> */}
  
    <VideoBackground /> 
     <CardSection className="height-[80vh]"/>
    {/* <GradientSketch /> */}
    </>
  );

}

export default ScrollSection;