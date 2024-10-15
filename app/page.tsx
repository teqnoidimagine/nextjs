'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
// import Logo from '@/app/assets/logo.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Curve from './components/Layout/page';

export default function Home() {
  return (
    <>
      <div className="">
        <Curve backgroundColor={'#BCF366'}>{/* <Header></Header> */}</Curve>
      </div>
      <div></div>
    </>
  );
}
