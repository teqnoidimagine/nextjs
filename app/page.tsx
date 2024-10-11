"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from "next/image";
// import Logo from '@/app/assets/logo.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import P5Sketch from "@/app/p5sketch"

export default function Home() {
  
  return (
    <>
   
    <div className=''>
    
      <P5Sketch />

    </div>
   <div >
    
   </div>
   </>
  );
}
