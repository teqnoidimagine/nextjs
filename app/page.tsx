'use client';
import Header from './Header'
import Curve from './components/Layout/page';

export default function Home() {
  return (
    <>
      <div className="">
        <Curve backgroundColor={'black'}><Header></Header></Curve>
      </div>
      <div></div>
    </>
  );
}
