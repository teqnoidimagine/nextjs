import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedButton = ({
  logoImage,
  fullNameImage,
  logoWidth = 100,
  logoHeight = 50,
  fullNameWidth = 20,
  fullNameHeight = 20,
  backgroundColor = 'black',
  borderRadius = '5px',
  hoverWidth = 300,
  children,
}) => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        width: `${logoWidth}px`, // Initial width of the logo
        height: `${logoHeight}px`,
        backgroundColor: backgroundColor,
        position: 'relative',
        cursor: 'pointer',
        borderRadius: borderRadius,
      }}
      whileHover={{ width: `${hoverWidth}px` }} // Expand the width on hover
      transition={{ duration: 0.3 }}
    >
      {/* Logo Image */}
      <Image src={logoImage} width={logoWidth} height={logoHeight} alt="Company Logo" />

      {/* Full Name Image (Hidden initially, shown on hover) */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: 0, // Initially hidden
          backgroundColor:'black'
        }}
        whileHover={{ opacity: 1 }} // Show on hover
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
