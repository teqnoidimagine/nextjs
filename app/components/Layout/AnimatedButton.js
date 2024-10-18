import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedButton = ({
  logoImage,
  fullNameImage,
  logoWidth = 100,
  logoHeight = 50,
  fullNameWidth = 200,
  fullNameHeight = 50,
  backgroundColor = 'black',
  borderRadius = '5px',
  hoverWidth = 350,
}) => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        width: `${logoWidth}px`, // Initial width of the container
        height: `${logoHeight}px`,
        backgroundColor: backgroundColor,
        position: 'relative',
        cursor: 'pointer',
        borderRadius: borderRadius,
        overflow: 'hidden',
      }}
      whileHover={{ width: `${hoverWidth}px` }} // Expand the width of the container on hover
      transition={{ duration: 0.3 }}
    >
      {/* Small Logo Image (visible initially, hidden on hover) */}
      <motion.div
        style={{
          width: `${logoWidth}px`,
          height: `${logoHeight}px`,
          opacity: 1, // Initially visible
          zIndex: 1, // Ensures the small logo is on top initially
        }}
        whileHover={{ opacity: 0 }} // Hide on hover
        transition={{ duration: 0.3 }}
      >
        <Image src={logoImage} width={logoWidth} height={logoHeight} alt="Company Logo" />
      </motion.div>

      {/* Full Name Image (hidden initially, shown on hover) */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: 0, // Initially hidden
          width: `${fullNameWidth}px`,
          height: `${fullNameHeight}px`,
          zIndex: 0, // Full name will show up after logo disappears
        }}
        whileHover={{ opacity: 1 }} // Show the full name on hover
        transition={{ duration: 0.3 }}
      >
        <Image
          src={fullNameImage}
          width={fullNameWidth}
          height={fullNameHeight}
          alt="Company Full Name"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedButton;
