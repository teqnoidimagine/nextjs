'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import './globals.css';
// import '@/styles/styles.scss';
import TeqLogo from  '../public/assets/TeqLogo.png'
import TeqLogoFull from  '../public/assets/TeqnLogoFull1.png'
import Image from 'next/image';
import AnimatedButton from './components/Layout/AnimatedButton'
import VideoBackground from "@/app/videoBackground"
import ScrollSection from '@/app/scrollSection'
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
                </div>
            </body>
        </html>
    );
}
