'use client';

import dynamic from 'next/dynamic';
import Curve from './components/Layout/curve';

// Dynamically import the Header component
const Header = dynamic(() => import('./Header'), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="">
        <Curve backgroundColor={''}>
          <Header />
        </Curve>
      </div>
      <div></div>
    </>
  );
}
