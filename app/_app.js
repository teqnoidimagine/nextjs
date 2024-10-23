import '@/styles/globals.css'
import { AnimatePresence,motion } from 'framer-motion'
import Link from 'next/link';
// import '@/styles/styles.scsws';
import { useRouter } from 'next/navigation';

export default function App({ Component, pageProps, router }) {
    const pageTransition = {
        initial: { opacity: 0, x: 50 }, // Starting state (slightly off-screen)
        animate: { opacity: 1, x: 0 },  // End state (visible and centered)
        exit: { opacity: 0, x: -50 },   // Exit state (slightly off-screen)
        transition: { duration: 0.2 },  // Duration of the animation (faster transition)
      };
      const router = useRouter();
    return (
        <div className='main'>
             <div className='header'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <AnimatePresence mode='wait'>
            <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Component {...pageProps} />
      </motion.div>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}
