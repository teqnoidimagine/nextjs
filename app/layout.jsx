'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import './globals.css';
import VideoBackground from "@/app/videoBackground"
import ScrollSection from '@/app/scrollSection'
import AnimatedDivider from './components/Layout/AnimatedDivider'
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    {/* Add the header with navigation links */}
                    <div className='absolute z-15 inset-0 flex gap-20  justify-between m-10 h-[150px] items-center '>
                    <div className="p-4 bg-black flex items-center justify-center rounded-xl relative">
      {/* Ensure relative positioning on the container */}
      <div>
        
      </div>
      <div className="flex flex-col items-center justify-center">
  <div className="sudo relative w-20 h-40 transition-all duration-300 ease-in-out overflow-hidden">
    <div className="bg-image-one  absolute inset-0 transition-opacity duration-300 ease-in-out"></div>
    <div className="bg-image-two absolute inset-0 transition-all duration-300 ease-in-out opacity-0 w-0 h-full"></div>
  </div>
</div>

    </div>
        <div className='flex text-black'>
        <ul>
        <li className='text-black'><Link href="/">Home</Link></li>
        <li>
          
          <Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
         </ul>
        </div>
        <div className='p-4 w-36 bg-black text-white text-center text-lg flex items-center justify-center rounded-xl'>
          {/* <Image src={TeqLogo} width={30} height={200}/> */}
          GET <br/>STARTED
        </div>
        
        </div>
                   

                    {/* Wrap the children in AnimatePresence to handle page transitions */}
                    <AnimatePresence mode="wait">
                        {children}
          
                    </AnimatePresence>

                    <VideoBackground /> 
                    <ScrollSection />
                    <footer>
               <div className='mt-24 text-xl flex gap-24 mx-[5%]'>
                <ul className='flex flex-col gap-2 text-left'>
                     DISCOVER
                    <li>About </li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Blog</li>
                   
                    </ul>
                    <ul className='flex flex-col gap-2 text-left'>
                    DISCOVER
                    <li>About </li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Blog</li>
                   
                    </ul>
               </div>
               <AnimatedDivider />
  <div class="custom-footer-marquee animate-text">
  <p className="animate-text custom-footer-text ">
            <span className='font-gangItem font px-10 '>TEQNOID</span>
            <span className="font-gangItem font px-10 ">TO BUILD</span>
            <span>YOUR</span>
            <span className="font-gangItem font px-5 font-normal">VISION</span>
            <span>TEQNOID</span>
            <span className="font-gangItem font px-10 ">TO BUILD</span>
            <span>YOUR</span>
            <span className="font-gangItem font px-5 font-normal">VISION</span>
            <span>TEQNOID</span>
          
          </p>
  </div>
</footer>

  



                </div>
            </body>
        </html>
    );
}
